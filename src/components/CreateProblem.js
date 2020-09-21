import React, { Component } from 'react';
import { authService, dbService } from '../fbase.js';

class CreateProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionNumber: '1',
            sectionName: '우리 생활 속의 화학',
            examType: '평가원',
            examYear: '2020',
            problemPage: '1',
            problemScore: '2',
            reason: '오개념',
            description: '',
            solvedMonth: '',
            solvedWeek: '1주차',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
	
    onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection(authService.currentUser.uid).add({
            info: this.state,
            createdTime: Date.now(),
			createdName: authService.currentUser.displayName,
        });
		
		//old handleSubmit below
        // let data = JSON.parse(localStorage.getItem('problems'));
        // if (data === null) {
        //     data = [];
        //     data.push(this.state);
        // } else {
        //     data = Object.values(data);
        //     data.push(this.state);
        // }
        // localStorage.setItem('problems', JSON.stringify(data));

        this.setState({
            sectionNumber: '1',
            sectionName: '우리 생활 속의 화학',
            examType: '평가원',
            examYear: '2020',
            problemPage: '1',
            problemScore: '2',
            reason: '오개념',
            description: '',
            solvedMonth: '',
            solvedWeek: '1주차',
        });
		
		
    };

    componentDidMount() {
        if (this.state.solvedMonth == '') {
            let today = new Date();
            let month = today.getMonth() + 1;
            this.setState({ solvedMonth: month + '월' });
        }
    }
    componentDidUpdate() {
        if (this.state.solvedMonth == '') {
            let today = new Date();
            let month = today.getMonth() + 1;
            this.setState({ solvedMonth: month + '월' });
        }
    }

    async resetData() {
		window.alert("준비 중");
			// if (window.confirm('정말 초기화 하시겠습니까?\n입력한 모든 데이터가 삭제됩니다.')) {
			// await dbService.doc(`${authService.currentUser.uid}/`).delete();
			// this.setState({
			// sectionNumber: '1',
			// sectionName: '우리 생활 속의 화학',
			// examType: '평가원',
			// examYear: '2020',
			// problemPage: '1',
			// problemScore: '2',
			// reason: '오개념',
			// description: '',
			// solvedMonth: '',
			// solvedWeek: '1주차',
			// });
			// } else {
			// }
    }

    chapter(sectionNumber) {
        if (sectionNumber === '1') {
            return (
                <select name="sectionName" value={this.state.value} onChange={this.handleChange}>
                    <option value="우리 생활 속의 화학">우리 생활 속의 화학</option>
                    <option value="화학식량과 몰">화학식량과 몰</option>
                    <option value="화학반응식">화학반응식</option>
                    <option value="농도">농도</option>
                </select>
            );
        }
        if (sectionNumber === '2') {
            return (
                <select name="sectionName" value={this.state.value} onChange={this.handleChange}>
                    <option value="원자의 구조">원자의 구조</option>
                    <option value="원자모형">원자모형</option>
                    <option value="전자배치와 양자수">전자배치와 양자수</option>
                    <option value="주기적성질">주기적성질</option>
                </select>
            );
        }
        if (sectionNumber === '3') {
            return (
                <select name="sectionName" value={this.state.value} onChange={this.handleChange}>
                    <option value="이온결합">이온결합</option>
                    <option value="공유결합과 극성">공유결합과 극성</option>
                    <option value="분자구조와 성질">분자구조와 성질</option>
                </select>
            );
        }
        if (sectionNumber === '4') {
            return (
                <select name="sectionName" value={this.state.value} onChange={this.handleChange}>
                    <option value="동적평형">동적평형</option>
                    <option value="중화반응">중화반응</option>
                    <option value="산화환원">산화환원</option>
                    <option value="반응열">반응열</option>
                </select>
            );
        }
    }
	
    render() {
		console.log(this.state);
        return (
            <div className="inputs">
                <h1 style={{ alignSelf: 'center' }}>오답 입력</h1>
                <button
                    onClick={() => {
                        this.resetData();
                    }}
                    style={{ alignSelf: 'flex-end' }}
                >
                    초기화
                </button>
                <form onSubmit={this.onSubmit}>
                    <label>
                        푼 시기:
                        <select
                            name="solvedMonth"
                            value={this.state.solvedMonth}
                            onChange={this.handleChange}
                        >
                            <option value="1월">1월</option>
                            <option value="2월">2월</option>
                            <option value="3월">3월</option>
                            <option value="4월">4월</option>
                            <option value="5월">5월</option>
                            <option value="6월">6월</option>
                            <option value="7월">7월</option>
                            <option value="8월">8월</option>
                            <option value="9월">9월</option>
                            <option value="10월">10월</option>
                            <option value="11월">11월</option>
                            <option value="12월">12월</option>
                        </select>
                        <select
                            name="solvedWeek"
                            value={this.state.solvedWeek}
                            onChange={this.handleChange}
                        >
                            <option value="1주차">1주차</option>
                            <option value="2주차">2주차</option>
                            <option value="3주차">3주차</option>
                            <option value="4주차">4주차</option>
                            <option value="5주차">5주차</option>
                        </select>
                    </label>
                    <label>
                        단원:
                        <select
                            name="sectionNumber"
                            value={this.state.sectionNumber}
                            onChange={this.handleChange}
                        >
                            <option value="1">1단원</option>
                            <option value="2">2단원</option>
                            <option value="3">3단원</option>
                            <option value="4">4단원</option>
                        </select>
                        {this.chapter(this.state.sectionNumber)}
                    </label>
                    <label>
                        모의고사 분류:
                        <select
                            name="examType"
                            value={this.state.examType}
                            onChange={this.handleChange}
                        >
                            <option value="평가원">평가원</option>
                            <option value="교육청">교육청</option>
                            <option value="사설">사설</option>
                            <option value="수능특강">수능특강</option>
                        </select>
                    </label>
                    <label>
                        출제년도:
                        <select
                            name="examYear"
                            value={this.state.examYear}
                            onChange={this.handleChange}
                        >
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016 이전</option>
                        </select>
                    </label>
                    <label>
                        페이지:
                        <select
                            name="problemPage"
                            value={this.state.problemPage}
                            onChange={this.handleChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <label>
                        배점:
                        <select
                            name="problemScore"
                            value={this.state.problemScore}
                            onChange={this.handleChange}
                        >
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label>
                        틀린 이유:
                        <select
                            name="reason"
                            value={this.state.reason}
                            onChange={this.handleChange}
                        >
                            <option value="오개념">오개념</option>
                            <option value="시간부족">시간부족</option>
                            <option value="판단오류">판단오류</option>
                            <option value="계산실수">계산실수</option>
                            <option value="기타">기타</option>
                        </select>
                    </label>
                    <label>
                        세부 내용:
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="세부 내용"
                            style={{ width: 260, height: 60 }}
                        />
                    </label>
                    <input type="submit" value="등록" style={{ width: '100%', height: 30 }} />
                </form>
            </div>
        );
    }
}

export default CreateProblem;