<?php
namespace Topxia\WebBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Topxia\Common\ArrayToolkit;

class SignController extends BaseController
{
	public function signAction(Request $request, $classId, $userId)
	{
		$this->getSignService()->classMemberSign($userId, $classId, $classId);
		return $this->createJsonResponse('success');
	}

	public function userInfoAction($class)
	{
		$user = $this->getCurrentUser();
		$classMember = $this->getClassesService()->refreashStudentRank($user['id'], $class['id']);
		$nextLearnLesson = $this->getCourseService()->getNextLearnLessonByUserId($user['id']);
		$nextCourse = array();
		$nextLesson = array();
		if($nextLearnLesson) {
			$nextCourse = $this->getCourseService()->getCourse($nextLearnLesson['courseId']);
			$nextLesson = $this->getCourseService()->getCourseLesson($nextLearnLesson['courseId'], $nextLearnLesson['lessonId']);
		}
		
		$isSignedToday = $this->getSignService()->isSignedToday($user['id'], $class['id']);
		return $this->render('TopxiaWebBundle:Sign:show.html.twig',array(
			'class' => $class,
			'user' => $user,
			'nextCourse' => $nextCourse,
			'nextLesson' => $nextLesson,
			'classMember' => $classMember,
			'isSignedToday' => $isSignedToday));
	}

	public function getSignedRecordsByPeriodAction(Request $request, $classId, $userId)
	{
		$startDay = $request->query->get('startDay');
		$endDay = $request->query->get('endDay');
	
		$userSigns = $this->getSignService()->getSignRecordsByPeriod($userId, $classId, $startDay, $endDay);
		$result = array();
		$result['records'] = array();
		if($userSigns) {
			foreach ($userSigns as $userSign) {
			$result['records'][] = array(
				'day' => date('d',$userSign['createdTime']),
				'time' => date('G点m分',$userSign['createdTime']));
			}
		}
		$ClassMemberSignStatistics = $this->getSignService()->getClassMemberSignStatistics($userId, $classId);
		$ClassSignStatistics = $this->getSignService()->getClassSignStatistics($classId);

		$result['todayRank'] = $ClassMemberSignStatistics['todayRank'];
		$result['signedNum'] = $ClassSignStatistics['signedNum'];
		$result['keepDays'] = $ClassMemberSignStatistics['keepDays'];
		
		return $this->createJsonResponse($result);
	}

	public function getSignService()
	{
		return $this->getServiceKernel()->createService('Classes.SignService');
	}

	public function getClassesService()
	{
		return $this->getServiceKernel()->createService('Classes.ClassesService');
	}

		public function getCourseService()
	{
		return $this->getServiceKernel()->createService('Course.CourseService');
	}
}