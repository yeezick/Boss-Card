import { BsPersonLinesFill } from "react-icons/bs";
import { GiMagickTrick, GiPodiumWinner } from "react-icons/gi";
function Market() {
  return (
    <section className="market-section">
      <h2 className="market-header">How We Work</h2>
      <div className="market-card-container">
        <div className="market-card">
          <BsPersonLinesFill size={50} />
          <p>Tell us about yourself</p>
        </div>
        <div className="market-card">
          <GiMagickTrick size={50} />
          <p>We work our magic</p>
        </div>
        <div className="market-card">
          <GiPodiumWinner size={50} />
          <p>You leave with a virtual impression they won't forget!</p>
        </div>
      </div>
    </section>
  );
}
export default Market;
