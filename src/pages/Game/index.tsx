import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import './main.css'

const CARD_LENGTH: number = 52
const ROW_NUMBER: number = 8
const isUsed: boolean[] = new Array(52).fill(false)


const getRandCardNum: Function = () => {
  let value: number;
  while (true) {
    value = Math.floor(Math.random() * 52) // 0 - 51
    if (!isUsed[value]) {
      isUsed[value] = true;
      return (value);
    }
  }
}

const Home: React.FC = () => {
  const [cardList, setCardList] = useState<number[][]>(new Array(8).fill([]))

  // initialize cardList
  useEffect(() => {
    const randomCardList = () => {
      for (let i = 0; i < CARD_LENGTH; ++i) {
        let row: number = i % ROW_NUMBER
        let cardValue: number = getRandCardNum()
        setCardList(function (prevValue: number[][]) {
          let copy: number[][] = [...prevValue]
          copy[row] = [...copy[row], cardValue]
          return copy
        })
      }
    };
    randomCardList()
  }, [])

  return <div className="main">
    {
      cardList.map((row: number[], index: number) => {
        return <div key={index} className="card-group">
          {
            row.map((item: number) => {
              return <Card key={ item } value={ item } />
            })
          }
        </div>
      })
    }
  </div>
}

export default Home;