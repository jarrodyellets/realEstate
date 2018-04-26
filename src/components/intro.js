import React, {Component} from 'react';
import Neighborhood from './neighborhood';
import Featured from './featured';

const Intro = (props) => {
	return (
		<div className={props.intro ? "" : "hidden"}>
			<div className="preload"></div>
			<div className={props.mode == "buy" ? 'main austinDay' : 'main austinNight'}>
				<div className="titleContainer">
					<div className="introTitle">Find your {props.mode == "buy" ? 'next house' : 'new rental'}</div>
					<div className="buttonIntroDiv">
						<button className={props.mode == "buy" ? 'introButton activeButton' : 'introButton unActiveButton'} 
										onClick={() => {props.changeMode("buy")}}>Buy</button>
						<button className={props.mode == "buy" ? 'introButton unActiveButton' : 'introButton activeButton'} 
										onClick={() => {props.changeMode("rent")}}>Rent</button>
					</div>
					<Neighborhood value={props.value} changeValue={props.changeValue} changeIntro={props.changeIntro} />
				</div>
			</div>
			<Featured buy={props.buy} 
								rent={props.rent} 
								mode={props.mode} />
		</div>
		)
}

export default Intro;
