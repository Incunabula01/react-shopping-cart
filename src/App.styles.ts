import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    width: 50vw;
    margin: 0 auto;
`;

export const DrawerButton = styled(IconButton)`
    position: fixed;
    z-index: 9000;
    right: 20px;
    top: 20px;
`;