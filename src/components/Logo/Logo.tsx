import { gsap } from "gsap";
import profile from "../../resources/images/profile.png";
import "./Logo.scss";

const Logo = () => {
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / 20;
    const offsetY = (clientY - centerY) / 20;

    gsap.to(".logo-img", {
      x: offsetX,
      y: offsetY,
      rotationX: -offsetY,
      rotationY: offsetX,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".logo-img", {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
    });
  };

  return (
    <div>
      <img
        className="logo-img glow-effect"
        src={profile}
        alt="My image"
        width={400}
        height={700}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
export default Logo;
