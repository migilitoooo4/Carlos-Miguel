import React from "react";
import GooeyNav from "./GooeyNav";
import TextPressure from "./TextPressure";
import GradientText from "./GradientText";
import logo from "./assets/logo-light-transparent.png";
import "./App.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
const items = [
{ label: "Home", href: "#" },
{ label: "Projects", href: "#" },
{ label: "Socials", href: "#" },
];

return (
<>
<div
style={{
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
zIndex: 0,
pointerEvents: "none",
}}
>
<Canvas
camera={{ position: [0, 0, 1] }}
gl={{ alpha: true }}
style={{ width: "100vw", height: "100vh" }}
>
<Stars
radius={400} // Larger radius for wider spread
count={2000} // More stars
factor={6} // Controls star size relative to distance
saturation={0} // Optional: grayscale
fade={true} // Enables fading of distant stars
speed={1} // Controls animation speed — try 2–4
/>
</Canvas>
</div>
{/* Logo */}
<img
src={logo}
alt="Logo"
style={{
position: "absolute",
top: "20px",
left: "20px",
height: "50px",
zIndex: 10,
pointerEvents: "auto",
width: "auto",
maxWidth: "30vw", // Scales on small screens
}}
/>

{/* Nav */}
<div
style={{
position: "absolute",
top: "20px",
right: "30px",
zIndex: 10,
display: "flex",
justifyContent: "flex-end",
pointerEvents: "auto",
}}
>
<GooeyNav
items={items}
particleCount={15}
particleDistances={[90, 10]}
particleR={100}
initialActiveIndex={0}
animationTime={600}
timeVariance={300}
colors={[1, 2, 3, 1, 2, 3, 1, 4]}
/>
</div>

{/* Name Text */}
<div
style={{
position: "absolute",
top: "290px", // Keeping it as is, similar to original placement
left: "50%", // Center horizontally
transform: "translateX(-50%)", // Adjusts for true centering
color: "white",
zIndex: 10,
pointerEvents: "auto",
textAlign: "center",
}}
>
{/* CARLOS MIGUEL! */}
<div style={{ position: "relative", height: "170px" }}>
<TextPressure
text="CARLOS MIGUEL FRANCISCO"
flex={true}
alpha={false}
stroke={false}
width={true}
weight={true}
italic={true}
textColor="#ffffff"
strokeColor="#ff0000"
minFontSize={window.innerWidth < 768 ? 60 : 130} // 60px on mobile, 150px on desktop
/>
</div>

{/* Subtitle */}
<GradientText
colors={["#40ffaa", "#4079ff", "#FF0090", "#4079ff", "#40ffaa"]}
animationSpeed={3}
showBorder={false}
className="custom-class"
style={{
marginTop: "20px",
fontSize: window.innerWidth < 768 ? "16px" : "24px",
}}
>
Frontend Developer | UIUX Designer | Graphic Artist
</GradientText>
</div>
</>
);
}

export default App;
