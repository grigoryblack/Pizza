import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
    name: string,
    order: string,
    time: string,
    delivery: string,
    price: string,
    status: string,
) {
    return {
        name,
        order,
        time,
        delivery,
        price,
        status,
        history: [
            {
                courier: 'Иванов И.И.',
                baker: 'Сидоров Г.Г.',
                address: 'Ул.Пушкина 35 а, кв.123',
                telephone: '+7-(912)-889-99-88'
            },
            {
                courier: 'Петров И.И.',
                baker: 'Сидоров Г.Г.',
                address: 'Ул.Колотушкина 36 б, кв.228',
                telephone: '+7-(912)-889-99-88'
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset'} }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{fontFamily: 'Montserrat', color:'#88898A' }}>
                    {row.name}
                </TableCell>
                <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500'}}>{row.order}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#88898A' }}>{row.time}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#88898A' }}>{row.delivery}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500' }}>{row.price}</TableCell>
                <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#88898A' }}>{row.status}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0,}} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{fontFamily: 'Montserrat',color:'#00000' }}>
                                Информация о заказе
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500'}}>Имя курьера</TableCell>
                                        <TableCell sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500'}}>Имя пекаря</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500'}} >Адрес доставки</TableCell>
                                        <TableCell align="center"  sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'500'}} >Номер телефона</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.courier}>
                                            <TableCell component="th" scope="row"  sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'400'}}>
                                                {historyRow.courier}
                                            </TableCell>
                                            <TableCell sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'400'}}>{historyRow.baker}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'400'}}>{historyRow.address}</TableCell>
                                            <TableCell align="center" sx={{fontFamily: 'Montserrat',color:'#000000',fontWeight:'400'}}>
                                                {historyRow.telephone}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Иванов Иван Иванович', '2 “Четыре сыра” , 1 “Пеппер...', '03.09.2022    15:01', 'Самовывоз', '845 р.', 'В работе'),
    createData('Кулибинов Сергей Федотович', '1 “Четыре сыра”', '03.09.2022    15:01', 'Курьер', '545 р.', 'Выдано курьеру'),
    createData('Семенов Сергей Сергеевич', '2 “Четыре сыра” , 1 “Пеппер...', '03.09.2022    15:01', 'Курьер', '1045 р.', 'В работе'),
    createData('Калинин Дмитрий Антонович', '4 “Четыре сезона”, 2 “Ветчин...', '03.09.2022    15:01', 'Курьер', '945 р.', 'Оплачено'),
    createData('Денисов Лука Григорьевич', '2 “Четыре сыра” , 1 “Пеппер...', '03.09.2022    15:01', 'Самовывоз', '845 р.', 'Принято'),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell sx={{fontFamily: 'Montserrat' }}>Имя клиента</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Montserrat' }}>Заказ</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Montserrat' }}>Дата и время заказа</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Montserrat' }}>Доставка</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Montserrat' }}>Сумма заказа</TableCell>
                        <TableCell align="center" sx={{fontFamily: 'Montserrat' }}>Статус заказа</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}