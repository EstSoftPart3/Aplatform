import { createStore } from 'vuex';

const store = createStore ({
    state: {
     member: JSON.parse(sessionStorage.getItem("member"))|| null // 사용자 정보 저장할 상태
    },
    mutations: {
      setMember(state, payLoad) {
        state.member = payLoad;
        sessionStorage.setItem("member",JSON.stringify(payLoad)); // 세션 스토리지에 사용자 정보 저장
        console.log("사용자정보 등록")
      },
      clearMember(state) {
        state.member = null;
        sessionStorage.removeItem("member"); // 세션 스토리지에서 사용자 정보 제거
        console.log("로그아웃")
      },
      updateMemberInfo(state, updatedInfo) {
        state.member = { ...state.member, ...updatedInfo };
        sessionStorage.setItem("member", JSON.stringify(state.member));
      }
    },
    getters:{
      isLoginMember(state){
        return state.member !== null; // 사용자가 로그인 상태인지 여부를 반환
        
      },
      getMember(state){
        return state.member; // 사용자 정보 반환
      }
    }
})
export default store;