import { SetStateAction, useState } from 'react';
import './task.scss';

const Task = () => {

    const regexpPasswordEasy = new RegExp("[0-9a-zA-Z!@#$%^&*]{8,}");
    const regexpPasswordMedium = new RegExp("((?=.*[0-9])(?=.*[!@#$%^&*])){8,}|((?=.*[0-9])(?=.*[a-z])){8,}|((?=.*[a-z])(?=.*[!@#$%^&*])){8,}");
    const regexpPasswordStrong = new RegExp("((?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])){8,}");

    const [password, setPassword] = useState<string>('');

    const [easyLevel, setEasyLevel] = useState<string>('grey');
    const [mediumLevel, setmMdiumLevel] = useState<string>('grey');
    const [strongLevel, setStrongLevel] = useState<string>('grey');

    const passwordHandleChange = (e: { target: { value: SetStateAction<string> }}) => {
        setPassword(e.target.value);
    };

    const levelHandleChange = () => {
        if(password === ''){
            setEasyLevel('grey');
            setmMdiumLevel('grey');
            setStrongLevel('grey');
        }
        else{
            if(password.length < 8){
                setEasyLevel('red');
                setmMdiumLevel('red');
                setStrongLevel('red');
            }
            else{
                if(regexpPasswordStrong.test(password)){
                    setEasyLevel('green');
                    setmMdiumLevel('green');
                    setStrongLevel('green');
                }
                else if(regexpPasswordMedium.test(password)){
                    setEasyLevel('yellow');
                    setmMdiumLevel('yellow');
                    setStrongLevel('grey');
                }
                else if(regexpPasswordEasy.test(password)){
                    setEasyLevel('red');
                    setmMdiumLevel('grey');
                    setStrongLevel('grey');
                }
            }
        }
    };

    return(
        <div className='task'>
            <p>Введіть пароль:</p>
            <input type="text" onChange={passwordHandleChange} onKeyUp={levelHandleChange}/>
            <div className="task-level">
                <div className="task-level_item" style={{background: `${easyLevel}`}}></div>
                <div className="task-level_item" style={{background: `${mediumLevel}`}}></div>
                <div className="task-level_item" style={{background: `${strongLevel}`}}></div>
            </div>
        </div>
    )
};

export default Task;