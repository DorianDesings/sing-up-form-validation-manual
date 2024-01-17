import BannerAd from '../banner-ad/BannerAd';
import Form from '../form/Form';
import Text from '../text/Text';
import Title from '../title/Title';

const Main = () => {
	return (
		<main>
			<Title>Learn to code by watching others</Title>
			<Text>
				See how experienced developers solve problems in real-time. Watching
				scripted tutorials is great, but understanding how developers think is
				invaluable.
			</Text>
			<div>
				<BannerAd>Try it free 7 days then $20/mo. thereafter</BannerAd>
				<Form />
			</div>
		</main>
	);
};

export default Main;
