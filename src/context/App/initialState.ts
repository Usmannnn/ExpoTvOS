import { ImageRequireSource } from 'react-native';
import { GetScaledValue } from '../../methods';

export interface Data {
	number: number;
	uri: string;
	poster: ImageRequireSource;
}

export interface IData {
	id: number;
	width: number;
	height: number;
	title: string;
	data: Data[];
}

export interface IState {
	initialContentPosition: number;
	currentFocus: { sectionIndex: number; itemIndex: number; focusKey: string };
	data: IData[];
	navigationStack: string[];
}

export const initialState: IState = {
	initialContentPosition: GetScaledValue(630),
	currentFocus: { sectionIndex: 0, itemIndex: 0, focusKey: 'section0_item0' },
	data: [
		{
			id: 0,
			width: GetScaledValue(500), // 180,
			height: GetScaledValue(200), //100 ,
			title: 'section0',
			data: [...new Array(10).fill(0)],
		},
		{
			id: 1,
			width: GetScaledValue(400),
			height: GetScaledValue(400),
			title: 'section1',
			data: [...new Array(10).fill(0)],
		},
		{
			id: 2,
			width: GetScaledValue(200),
			height: GetScaledValue(350),
			title: 'section1',
			data: [...new Array(10).fill(0)],
		},
		{
			id: 3,
			width: GetScaledValue(250),
			height: GetScaledValue(250),
			title: 'section1',
			data: [...new Array(10).fill(0)],
		},
		{
			id: 4,
			width: GetScaledValue(400),
			height: GetScaledValue(850),
			title: 'section1',
			data: [
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: {
						uri: 'https://postercim.net/wp-content/uploads/2019/01/braveheart-film-posteri-600x750.jpg',
					},
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: {
						uri: 'https://postercim.net/wp-content/uploads/2019/01/braveheart-film-posteri-600x750.jpg',
					},
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
				{
					uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					poster: require('../../../assets/image.jpg'),
				},
			],
		},
		{
			id: 5,
			width: GetScaledValue(180),
			height: GetScaledValue(110),
			title: 'section0',
			data: [...new Array(10).fill(0)],
		},
	],
	navigationStack: ['section0_item0'],
};
