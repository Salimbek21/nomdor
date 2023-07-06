import React, { useState, useRef, useEffect } from "react";
import cls from "./bran.module.scss";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

const InnerBranch = ({ data }) => {
	const [lang, setLang] = useState(+data?.attributes?.Longitude);
	const [lat, setLat] = useState(+data?.attributes?.Latitude);
	return (
		<>
			<div className="container">
				<div className={cls.wrapAll}>
					<h3>{data.attributes?.Title}</h3>
				</div>
				<div className="rightMap">
					<div className="mapsRight">
						<div className={cls.infor}>
							<div className={cls.infor__new}>
								<div>Adres</div>
								<div className={cls.adres}>{data?.attributes?.description}</div>
							</div>
							<div className={cls.infor__new}>
								<div>Ish vaqti</div>
								<div>{data?.attributes?.workTime}</div>
							</div>
						</div>
						<YMaps query={{ lang: "en_RU" }}>
							<Map
								width={"100%"}
								height={"300px"}
								defaultState={{
									center: [lat, lang],
									zoom: 15,
									controls: [],
								}}
							>
								<ZoomControl options={{ float: "right" }} />
								<Placemark geometry={[lat, lang]} />
							</Map>
						</YMaps>
					</div>
				</div>{" "}
			</div>
		</>
	);
};

export default InnerBranch;
