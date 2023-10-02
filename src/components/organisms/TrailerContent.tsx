import { Image } from 'react-native';
import React from 'react';
import { useApp } from '../../context';
import LinearGradient from '../Gradient';

interface DataModel {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

const TrailerContent = () => {
	const data: DataModel[] = [
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
		{
			albumId: 1,
			id: 2,
			title: 'reprehenderit est deserunt velit ipsam',
			url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/771796',
		},
		{
			albumId: 1,
			id: 3,
			title: 'officia porro iure quia iusto qui ipsa ut modi',
			url: 'https://img.freepik.com/premium-photo/stunning-landscape-river-golden-hour-falls-mountains-generative-ai_34950-874.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/24f355',
		},
		{
			albumId: 1,
			id: 4,
			title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
			url: 'https://images.freeimages.com/slides/home-background.webp',
			thumbnailUrl: 'https://via.placeholder.com/150/d32776',
		},
		{
			albumId: 1,
			id: 5,
			title: 'natus nisi omnis corporis facere molestiae rerum in',
			url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
		},
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
		{
			albumId: 1,
			id: 2,
			title: 'reprehenderit est deserunt velit ipsam',
			url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/771796',
		},
		{
			albumId: 1,
			id: 3,
			title: 'officia porro iure quia iusto qui ipsa ut modi',
			url: 'https://img.freepik.com/premium-photo/stunning-landscape-river-golden-hour-falls-mountains-generative-ai_34950-874.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/24f355',
		},
		{
			albumId: 1,
			id: 4,
			title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
			url: 'https://images.freeimages.com/slides/home-background.webp',
			thumbnailUrl: 'https://via.placeholder.com/150/d32776',
		},
		{
			albumId: 1,
			id: 5,
			title: 'natus nisi omnis corporis facere molestiae rerum in',
			url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
		},
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
		{
			albumId: 1,
			id: 2,
			title: 'reprehenderit est deserunt velit ipsam',
			url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/771796',
		},
		{
			albumId: 1,
			id: 3,
			title: 'officia porro iure quia iusto qui ipsa ut modi',
			url: 'https://img.freepik.com/premium-photo/stunning-landscape-river-golden-hour-falls-mountains-generative-ai_34950-874.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/24f355',
		},
		{
			albumId: 1,
			id: 4,
			title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
			url: 'https://images.freeimages.com/slides/home-background.webp',
			thumbnailUrl: 'https://via.placeholder.com/150/d32776',
		},
		{
			albumId: 1,
			id: 5,
			title: 'natus nisi omnis corporis facere molestiae rerum in',
			url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
			thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
		},
	];

	const { currentFocus } = useApp();

	return (
		<LinearGradient style={{ flex: 1 }} colors={['white', 'black', 'black']}>
			<Image
				source={{ uri: data[currentFocus.itemIndex].url }}
				style={[{ flex: 1, opacity: 0.8 }]}
			/>
		</LinearGradient>
	);
};

export default TrailerContent;
