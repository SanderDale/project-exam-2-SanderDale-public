import React from "react";
import Link from "next/link";

export default class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			suggestions: [],
			text: "",
		};
	}

	onTextChange = (e) => {
		const { hotelNames } = this.props;
		console.log(hotelNames);
		let suggestions = [];
		const value = e.target.value;
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, `i`);
			suggestions = hotelNames.sort().filter((v) => regex.test(v));
		}

		this.setState(() => ({
			suggestions,
			text: value,
		}));
	};

	suggestionsSelected = (value) => {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}));
	};

	renderSuggestions = () => {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul className="w-full bg-gray-200 p-3 text-black">
				{suggestions.map((hotel) => (
					<li key={hotel} onClick={(e) => this.suggestionsSelected(hotel)}>
						{<Link href={"/hotels"}>{hotel}</Link>}
					</li>
				))}
			</ul>
		);
	};

	render() {
		const { text } = this.state;
		return (
			<div className="w-full md:w-2/4 xl:w-full mb-11">
				<input
					className="bg-gray-100 text-black border-black border-2 placeholder-black pl-5 font-heading h-12 lg:h-14 focus:border-black focus:ring-black w-full"
					onChange={this.onTextChange}
					value={text}
					type="text"
					placeholder="Search..."
				/>
				{this.renderSuggestions()}
			</div>
		);
	}
}
