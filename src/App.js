// import PinterestLayout from './components/PinterestLayout.js';
// import Masonry from './components/masonry.jsx';
// impor/t Dashboard from "./components/";
import React from "react";
import styled from "styled-components";
import Dashboard from './components/Dashboard.jsx';
import './styles.css';
import MyComponent from "./components/Mycomponents.js";
export default function App() {
	return (
		<div>
			{/* hello */}
			<MyComponent/>
		</div>
	);
}

const Div = styled.div`
  position: relative;
`;