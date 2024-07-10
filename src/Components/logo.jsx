import { Margin } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';

const AppleLogo = (props) => {
    return (
        <div className="applelogo" style={{ marginTop: 40, marginBottom: 40 }}>
            <AppleIcon />
            <span className="applelogotext">Music</span>
        </div>
    )
}

export default AppleLogo