import { ReactNode } from 'react';

type Props = {
    legend: string;
    children: ReactNode;
}


export const Photo = ({legend, children}: Props) => {
    return (
        //Fragment = <> </>
        <>
            {children}
            <p>{legend}</p>
        </>
    );
}