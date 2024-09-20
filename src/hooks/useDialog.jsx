import React from 'react'

export default function useDialog() {
    const [open, setOpen] = React.useState(false)
    
    return {
        open,
        setOpen
    }
}
