import { Button } from '../ui/button'

const MyBtn = ({text, variant, size}: {text: string, variant?: 'default' | 'destructive' | 'ghost' | 'link' | 'outline' | 'secondary', size?: 'sm' | 'lg'}) => {
    return (
        <Button className='bg-red-600 text-white z-10 cursor-pointer hover:bg-red-400 transition-all' size={size ? size : null} variant={variant ? variant : null}>{text}</Button>
    )
}

export default MyBtn