import React from 'react'
import './chatbot.css';
import ChatBot from 'react-simple-chatbot'

const Chatbot = () => {
  return (
    <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hi, How can I help you?',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Here is sone suggestion for you..',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'How to make account?', trigger: '9' },
              { value: 2, label: 'How to report an problem? ', trigger: '10' },
              { value: 3, label: 'How to upload a song?', trigger: '11' },
              { value: 4, label: 'About Plugins', trigger: '12' },
              { value: 5, label: 'About plugins team', trigger: '13' },
              { value: 6, label: 'Others', trigger: '14' },
              { value: 7, label: 'End the chat', trigger: '8' },
            ],
          },
          {
            id: '8',
            message: 'Thanks for chatting with me! Have a great day!',
            end: true,
          },
          {
            id: '9',
            message: 'You have to go to the sign up button there you can see a form you have to fill the form and sign up account. After that you can only login.',
            trigger: '5',
          },
          {
            id: '10',
            message: 'You can see a contact form button to the left side.You can visit the contact form by clicking that option. There you can fill the form and our team will contact you between 7 days',
            trigger: '5',
          },
          {
            id: '11',
            message: 'you can request a song by sending the song to the admin by fill up the form. Admin will upload the form after reviewing the song between 5 days.',
            trigger: '5',
          },
          {
            id: '12',
            message: 'Plugins is a modern and user-friendly music streaming platform where users can discover, play, and share their favorite tracks, playlists, and podcasts. It integrates an AI-powered recommendation engine and social features to enhance the overall music experience. The platform is designed for college students, allowing users to engage with the latest tracks while also promoting local and upcoming artists.',
            trigger: '5',
          },
          {
            id: '13',
            message: 'We have 3 developers. They are Sahin Nayak, Subhrajyoti Sarkar and Vishal Parui You can connect with them by visiting "our team" section.',
            trigger: '5',
          },
          {
            id: '14',
            message: 'You can see a contact form button to the left side.You can visit the contact form by clicking that option. There you can fill the form and our team will contact you between 7 days',
            trigger: '5',
          },
        ]}
        floating={true}
      />
  )
}

export default Chatbot
