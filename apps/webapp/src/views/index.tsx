import { log } from '@commons/core/utils';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    useEffect((): void => {
        log(`Index.useEffect...`);
    }, []);

    return (
        <div className={'text-center'}>
            <Link to={'/profile'}>Profile</Link>
        </div>
    );
};

export default Index;
