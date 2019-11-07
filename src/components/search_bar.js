import React, {Component} from 'react';


// component
// 함수형 컴포넌트는 멍청함. 때문에 클래스 기반 컴포넌트로 정의
// React.Component를 상속하는 클래스 기반 컴포넌트는 반드시 render()로 정의
// 하지만 함수형이 반드시 안좋은것은 아니다. 단 함수형 컴포넌트는 state가없음
// = state가 필요없는 상황, 유저에 의한 변경값을 감지할 필요가 없을때는 함수형
// 컴포넌트를 사용하려면 <name />
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={ e => this.setState( { term: e.target.value } ) } />
            </div>
        );
    }
};


export default SearchBar;