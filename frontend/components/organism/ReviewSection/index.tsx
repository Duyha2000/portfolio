import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import ReviewItem from '../../molecules/ReviewItem'
import Title from '../../atoms/Title'

type Activity = {
  text: string
}

const ReviewSection = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/activities`)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error('Failed to load activities:', err))
  }, [])

  return (
    <ReviewsStyled
      data-aos='fade-up'
      data-aos-easing='ease-out-cubic'
      data-aos-duration='2000'
    >
      <Title title={'ACTIVITIES'} span={'ACTIVITIES'} />
      <InnerLayout>
        <div className='reviews'>
          {activities.map((activity, index) => (
            <ReviewItem key={index} text={activity.text} />
          ))}
        </div>
      </InnerLayout>
    </ReviewsStyled>
  )
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
`

export default ReviewSection
