import { connect } from "react-redux";
import HomePageComponent from "./HomePageComponent";
import { homeOperations } from "./duck";

const mapStateToProps = (state) => {
  const { helloWorld } = state.home;
  return { helloWorld };
};

const mapDispatchToProps = (dispatch) => {
  const changeName = () => dispatch(homeOperations.changeName("Hugh"));
  return {
    changeName,
  };
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

export default HomePageContainer;
