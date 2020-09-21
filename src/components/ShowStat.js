import React, { usetState, useEffect } from 'react';
import { authService, dbService } from '../fbase.js';

function ShowStat() {
    let what = dbService
        .collection(authService.currentUser.uid)
        .get()
        .then((res) => {
            res.forEach((problem) => {
                console.log(problem.data().info.sectionNumber, problem.data().info.sectionName, problem.data().info.problemPage); // 얘네로 통계 내고 필터링 하기!
            });
        });
    return <div>Coming Soon ㅠㅠ</div>;
}
export default ShowStat;