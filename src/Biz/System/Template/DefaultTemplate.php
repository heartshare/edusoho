<?php

namespace Biz\System\Template;

use Biz\Content\Service\BlockService;
use Codeages\Biz\Framework\Context\Biz;

class DefaultTemplate extends Template
{
    public function getTemplate()
    {
        $posters = $this->getBlockService()->getPosters();
        $slides = array();
        foreach ($posters as $poster) {
            $slide = array(
                'title' => '',
                'image' => array(
                    'id' => 0,
                    'uri' => $poster['image'],
                    'size' => '',
                    'createdTime' => 0,
                ),
                'link' => array(
                    'type' => 'url',
                    'target' => null,
                    'url' => $poster['link']['url'],
                ),
            );
            $slides[] = $slide;
        }

        $result = array(
            'search-0' => array(
                'type' => 'search',
                'moduleType' => 'search-0'
            ),
            'slide-1' => array(
                'type' => 'slide_show',
                'moduleType' => 'slide-1',
                'data' => $slides,
                'tips' => array(
                    'banner中放限时免费、限时低价、限时活动的广告，强调突出限时活动，更容易吸引用户点击参与。',
                    'banner图设计时，重点突出能吸引用户点击的卖点。比如课程特色，价格等要素，能有效吸引客户点击。',
                ),
            ),
        );

        return array_merge($result, array(
            'graphic_navigation-2' => array(
                'type' => 'graphic_navigation',
                'moduleType' => 'graphic_navigation-2',
                'data' => array(
                    array(
                        'title' => '免费专区',
                        'image' => array('url' => 'static-dist/app/img/admin/h5/free@2x.png', 'uri' => ''),
                        'link' => array('target' => '', 'type' => '', 'url' => '')
                    ),
                    array(
                        'title' => '网校运营',
                        'image' => array('url' => 'static-dist/app/img/admin/h5/operation@2x.png', 'uri' => ''),
                        'link' => array('target' => '', 'type' => '', 'url' => '')
                    ),
                    array(
                        'title' => '使用帮助',
                        'image' => array('url' => 'static-dist/app/img/admin/h5/help@2x.png', 'uri' => ''),
                        'link' => array('target' => '', 'type' => '', 'url' => '')
                    ),
                    array(
                        'title' => '名师专场',
                        'image' => array('url' => 'static-dist/app/img/admin/h5/teacher@2x.png', 'uri' => ''),
                        'link' => array('target' => '', 'type' => '', 'url' => '')
                    ),
                ),
                'tips' => array(
                    '在导航栏中放上“免费专区”，更容易促进进入网校的用户试听课程哦。'
                ),
            ),
            'courseList-3' => array(
                'type' => 'course_list',
                'moduleType' => 'courseList-3',
                'data' => array(
                    'title' => '本周最受欢迎TOP5',
                    'sourceType' => 'condition',
                    'categoryId' => 0,
                    'sort' => '-studentNum',
                    'lastDays' => 0,
                    'limit' => 5,
                    'items' => array(),
                ),
                'tips' => array(
                    '首页中可以放多个课程列表。建议将 [最受欢迎课程列表] 作为第1个课程列表推荐。列表中课程选择建议包含：免费课程、低价课程、观看好评最高的课程、名师课程、著名课程、爆款课程等',
                    '免费课程选择：免费课程用于吸引用户体验和试看，选择好评度最高的且适用于核心用户的1个或2个免费课程，这类课程更易获得核心用户试看及好评，为后面低价转化做铺垫。',
                    '低价课程选择：低价课程是达到用户转化的一个策略。建议选择主题课或系列课等课时多课程内容较丰富的课程，原价设高、折后价设低。通过课程丰富度与价格的反差刺激，促进客户进行转化。',
                    '爆款课程选择：选择购买人数最多课程，购买人数最多的课程说明课程受众面较广，可作为爆款课程推广。',
                    '名师课程选择：在微网校上放价格较高的名师课程，通过名师名声，可有效的给客户增强信任感。同时高价格课程可与免费课程和低价课程形成反差，更容易促成低价课程成交。',
                )
            ),
            'courseList-4' => array(
                'type' => 'course_list',
                'moduleType' => 'courseList-4',
                'data' => array(
                    'title' => '爆款好课 不容错过',
                    'sourceType' => 'condition',
                    'categoryId' => 0,
                    'sort' => 'recommendedSeq',
                    'lastDays' => 0,
                    'limit' => 4,
                    'items' => array(),
                ),
                'tips' => array(
                    '如需对用户精细化运营把握用户，可在详情页-简介中添加联系方式（微信号或二维码），引导用户添加。',
                )
            ),
            'poster-5' => array(
                'type' => 'poster',
                'moduleType' => 'poster-5',
                'data' => array(
                    'image' => array(
                        'url' => 'static-dist/app/img/admin/h5/poster@2x.png'
                    ),
                    'link' => array(),
                ),
            ),
            'classroom_list-6' => array(
                'type' => 'classroom_list',
                'moduleType' => 'classroom_list-6',
                'data' => array(
                    'title' => '专项技能班',
                    'sourceType' => 'condition',
                    'categoryId' => 0,
                    'sort' => 'recommendedSeq',
                    'lastDays' => 0,
                    'limit' => 4,
                    'items' => array(),
                ),
            ),
        ));
    }

    /**
     * @return BlockService
     */
    private function getBlockService()
    {
        return $this->biz->service('Content:BlockService');
    }
}
