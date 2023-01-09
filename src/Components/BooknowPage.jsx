import React from 'react'
import { Image, Box, Button, Stack } from '@chakra-ui/react'

const BooknowPage = () => {

    return (
        <div>
            <h1>BooknowPage</h1>
            <Box boxSize='lg' >
                <Image boxSize='100px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Box> 
            <Stack>

            <Button colorScheme='teal' variant='solid'>
                Button
            </Button>
            </Stack> 
        </div>
    )
}

export default BooknowPage
