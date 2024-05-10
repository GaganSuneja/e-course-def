import { ReplayControl,Player,ControlBar,VolumeMenuButton,BigPlayButton } from 'video-react';
export const VideoPlayer = props => {
	return (
		<Player poster={props.poster} src={props.src}>
			<BigPlayButton position="center" />
			<ControlBar disableDefaultControls={true}>
				<VolumeMenuButton vertical={true} />
				<ReplayControl seconds={10} order={2.2} />
			</ControlBar>
		</Player>
	);
};
