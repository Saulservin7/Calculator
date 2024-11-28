import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '/'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')
    const [prevNum, setPrevNum] = useState('0')
    const [num, setNum] = useState('0')

    useEffect(() => {
        setFormula(num)
    },
        [num]
   ) 

    useEffect(() => {
        if(lastOperation.current){
            const firstPart = formula.split(' ').at(0);
            
            setFormula(`${firstPart } ${lastOperation.current} ${num}`)
        }
        else{
            setFormula(num);
        }
    },
        [num]
    )

    

    const lastOperation = useRef<Operator>()


    const buildNumber = (number: string) => {
        // Si el número actual incluye un '.' y el nuevo número también es '.', retorna
        if (num.includes('.') && number === '.') return;
        if (num.includes('-') && number === '-') return;
        if (num.includes('+') && number === '+') return;
        if (num.includes('x') && number === 'x') return;

        // Si el número actual es '0' y el nuevo número es '.', concatena y retorna
        if (num === '0' && number === '.') {
            setNum(num + number);
            return;
        }

        // Si el número actual es '0' y el nuevo número no es '0', reemplaza el número actual
        if (num === '0' && number !== '0') {
            setNum(number);
            return;
        }

        // Si el número actual es '0' y el nuevo número también es '0', retorna
        if (num === '0' && number === '0') return;

        // Concatenar el nuevo número al número actual
        setNum(num + number);
    };
    const clean = () => {
        lastOperation.current=undefined
        setFormula('0')
        setNum('0')
        setPrevNum('0')
    }


    const changeSign = () => {
        if (num.includes('-')) return setNum(num.replace('-', ''))

        return setNum('-' + num)
    }

    const setLastNumber = () => {
        if (num.endsWith('.')) {
            setPrevNum(num.slice(0, -1));
        } else {
            setPrevNum(num);
        }
        setNum('0');
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }


    return {
        formula,
        buildNumber,
        prevNum,
        num,
        clean,
        changeSign, divideOperation,
        setLastNumber,
        multiplyOperation,
        subtractOperation,
        addOperation


    };
};