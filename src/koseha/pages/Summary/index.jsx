import "./style.css";

const Summary = ({ children }) => {
  return (
    <div className="seha__summary">
      <h1>- 정한샘 (Seha) -</h1>
      <h1>풀스택 개발자 포트폴리오</h1>
      <hr></hr>
      <div className="seha__summary-info">안녕하세요.</div>
      <div className="seha__summary-info">개발하고 싶어하는 풀스택 개발자</div>
      <div className="seha__summary-info">정한샘입니다.</div>
      {children}
    </div>
  );
};

export default Summary;
