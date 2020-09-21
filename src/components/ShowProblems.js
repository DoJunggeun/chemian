import React, { useState, useEffect } from 'react';
import { authService, dbService } from '../fbase.js';

function ShowProblems() {
    const [problem, setProblem] = useState(null);
    const [problems, setProblems] = useState([]);
	const [specificDisplay, setSpecificDisplay] = useState(false);
    // const getProblems = async () => {
    //   const dbProblems = await dbService.collection(authService.currentUser.uid).get();
    //   dbProblems.forEach((document) => {
    //     const problemObject = {
    //       ...document.data(),
    //       id: document.id,
    //     };
    //     setProblems((prev) => [problemObject, ...prev]);
    //   });
    // };
    useEffect(() => {
        // getProblems();
        dbService.collection(authService.currentUser.uid).onSnapshot((snapshot) => {
            const problemArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProblems(problemArray);
        });
    }, []);

    const onDeleteClick = async (problem) => {
        const ok = window.confirm('정말 삭제하시겠습니까??');
        if (ok) {
            await dbService.doc(`${authService.currentUser.uid}/${problem.id}`).delete();
        }
    };

    return (
        <>
            <input
                type="button"
                value="필터"
                onClick={() => { setSpecificDisplay(!specificDisplay); window.alert('준비 중')}}
                style={{ backgroundColor: specificDisplay ? 'lightgray' : 'white' }}
            />
            <div>
                {problems.map((problem) => (
                    <div
                        key={problem.id}
                        style={{
                            position: 'relative',
                            border: '1px solid gray',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 10,
                            padding: 3,
                            overflowWrap: 'break-word',
                            textAlign: 'left',
                        }}
                    >
                        {problem.info.sectionNumber + '단원 ' + problem.info.sectionName}
                        {'(' +
                            problem.info.examYear +
                            '년 ' +
                            problem.info.examType +
                            ' 기출' +
                            ')'}
                        <button
                            onClick={() => onDeleteClick(problem)}
                            style={{ right: 0, top: 0, position: 'absolute' }}
                        >
                            삭제
                        </button>
                        <br />
                        {problem.info.problemPage + '페이지 (' + problem.info.problemScore + '점)'}
                        <br />
                        {'푼 시기: ' + problem.info.solvedMonth + problem.info.solvedWeek + '주차'}
                        <br />
                        {'오답 사유 : ' + problem.info.reason}
                        <br />
                        {'세부 내용 : ' + problem.info.description}
                    </div>
                ))}
            </div>
        </>
    );
}
export default ShowProblems;