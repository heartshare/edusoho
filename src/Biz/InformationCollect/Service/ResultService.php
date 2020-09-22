<?php

namespace Biz\InformationCollect\Service;

interface ResultService
{
    public function isSubmited($userId, $eventId);

    public function getResultByUserIdAndEventId($userId, $eventId);

    public function findResultItemsByResultId($resultId);
}
