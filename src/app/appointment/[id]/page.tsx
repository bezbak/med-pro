import { useParams } from 'next/navigation';
import React from 'react'

type Props = {}

export default function page({}: Props) {
  const { id } = useParams(); // Получаем параметр 'id' из URL

  return (
    <div>
        
    </div>
  )
}