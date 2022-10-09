import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

function Home() {
  return <FullWidthLayout>DASHBOARD</FullWidthLayout>;
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
