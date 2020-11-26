import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Svg } from 'react-optimized-image';
import { FlexDivColCentered } from 'styles/common';

import BaseModal from 'components/BaseModal';

import Button from 'components/Button';
import PendingConfirmation from 'assets/svg/app/pending-confirmation.svg';

type TxConfirmationModalProps = {
	onDismiss: () => void;
	txError: boolean;
	attemptRetry: () => void;
	content: React.ReactNode;
};

export const TxConfirmationModal: FC<TxConfirmationModalProps> = ({
	onDismiss,
	txError,
	attemptRetry,
	content,
}) => {
	const { t } = useTranslation();

	return (
		<StyledBaseModal
			onDismiss={onDismiss}
			isOpen={true}
			title={t('modals.confirm-transaction.title')}
		>
			<FlexDivColCentered>
				<Svg src={PendingConfirmation} />
			</FlexDivColCentered>
			{content}
			<Subtitle>{t('modals.confirm-transaction.helper')}</Subtitle>
			{txError && (
				<Actions>
					<Message>{t('common.transaction.error')}</Message>
					<MessageButton onClick={attemptRetry}>{t('common.transaction.reattempt')}</MessageButton>
				</Actions>
			)}
		</StyledBaseModal>
	);
};

const StyledBaseModal = styled(BaseModal)`
	[data-reach-dialog-content] {
		width: 270px;
	}
	.card-header {
		font-size: 12px;
		font-family: ${(props) => props.theme.fonts.interBold};
		background-color: ${(props) => props.theme.colors.mediumBlue};
	}
	.card-body {
		padding: 24px;
		background-color: ${(props) => props.theme.colors.mediumBlue};
	}
`;

const Subtitle = styled.div`
	text-align: center;
	color: ${(props) => props.theme.colors.gray10};
	padding-bottom: 48px;
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

const Actions = styled(FlexDivColCentered)`
	margin: 8px 0px;
`;

const Message = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.regular};
	flex-grow: 1;
	text-align: center;
	margin: 16px 0px;
`;

const MessageButton = styled(Button).attrs({
	variant: 'primary',
	size: 'lg',
	isRounded: true,
})`
	text-transform: uppercase;
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.condensedMedium};
`;

export default TxConfirmationModal;
