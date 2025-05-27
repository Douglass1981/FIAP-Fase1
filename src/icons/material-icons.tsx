import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import CompareArrows from '@mui/icons-material/CompareArrows';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import HistoryIcon from '@mui/icons-material/History';

import Logout from '@mui/icons-material/Logout';

import WavingHand from '@mui/icons-material/WavingHand';

const ArrowDownIcon = ({ ...props }) => <ArrowDownwardIcon {...props} />
const ArrowUpIcon = ({ ...props }) => <ArrowUpwardIcon {...props} />
const CompareArrowsIcon = ({ ...props }) => <CompareArrows {...props} />
const TransferIcon = ({ ...props }) => <SyncAltIcon {...props} />

const LogoutIcon = ({ ...props }) => <Logout {...props} />

const StatementIcon = ({ ...props }) => <HistoryIcon {...props} />

const WavingHandIcon = ({ ...props }) => <WavingHand {...props} />

export {
    ArrowDownIcon,
    ArrowUpIcon,
    CompareArrowsIcon,
    StatementIcon,
    LogoutIcon,
    TransferIcon,
    WavingHandIcon
}