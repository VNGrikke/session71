import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleMenu } from '../../store/reducers/menuReducer';
import { Menu as AntMenu } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    DollarOutlined,
    LineChartOutlined,
    FileOutlined,
    LeftOutlined,
} from '@ant-design/icons';
import './Menu.css';

export default function Menu() {
    const isExpanded = useSelector((state: RootState) => state.menu.isExpanded);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className={`menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <AntMenu mode="vertical" theme="dark">
                <AntMenu.Item icon={<DashboardOutlined />}>
                    {isExpanded && 'Bảng điều khiển'}
                </AntMenu.Item>
                <AntMenu.Item icon={<UserOutlined />}>
                    {isExpanded && 'Tài khoản'}
                </AntMenu.Item>
                <AntMenu.Item icon={<DollarOutlined />}>
                    {isExpanded && 'Tài sản'}
                </AntMenu.Item>
                <AntMenu.Item icon={<LineChartOutlined />}>
                    {isExpanded && 'Thống kê'}
                </AntMenu.Item>
                <AntMenu.Item icon={<FileOutlined />}>
                    {isExpanded && 'Tài liệu'}
                </AntMenu.Item>
                <AntMenu.Item icon={<LeftOutlined />} onClick={handleToggle}>
                    {isExpanded && 'Thu gọn'}
                </AntMenu.Item>
            </AntMenu>
        </div>
    );
};

