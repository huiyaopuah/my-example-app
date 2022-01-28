import { Card, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import GeneralSetting from './general-setting/GeneralSetting';
import ProfileSetting from './profile-setting/ProfileSetting';
import SecuritySetting from './security-setting/SecuritySetting';

const { TabPane } = Tabs;

export default function Setting() {
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        
    }, [])

    return (
        <Card
            align="start"
        >
            <Tabs tabPosition='left' type='line'>
                <TabPane tab="General" key="/general">
                    <GeneralSetting />
                </TabPane>
                <TabPane tab="Profile" key="/profile">
                    <ProfileSetting />
                </TabPane>
                <TabPane tab="Security" key="/security">
                    <SecuritySetting />
                </TabPane>
            </Tabs>
        </Card>
    );
}