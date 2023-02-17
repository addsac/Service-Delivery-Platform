import IconClock from '@/public/icon/icon-clock.svg'
import IconPin from '@/public/icon/icon-pin.svg'
import Button from './ui/Button'
import IconLink from '@/public/icon/icon-link.svg'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

export default function AppointmentsCard({ item }) {
  return (
    <div className='py-1 px-6 bg-white rounded-md border border-slate-900/10'>
        <div className="flex flex-col">
            <div className="py-5 border-b border-slate-900/5">
                <p className="text-base text-slate-900"> {item.title} </p>
            </div>
            <div className="flex items-start gap-x-3 py-5 border-b border-slate-900/5">
                <span className="w-5 h-5 text-slate-400">
                    <IconClock />
                </span>
                <div className="flex flex-col gap-y-3 text-base text-slate-900">
                    <p> {format(new Date(item.date), 'd MMMM yyyy', { locale: it})} </p>
                    <p> {item.time} </p>
                    <p> {item.duration} </p>
                </div>
            </div>
            <div className="flex items-start gap-x-3 py-5 border-b border-slate-900/5">
                <span className="w-5 h-5 text-slate-400">
                    <IconPin />
                </span>
                <p className="text-base text-slate-900"> {item.place} </p>
            </div>
            {item.links.map((link) => (
                <div className="flex items-center gap-x-3 py-5">
                    <span className="w-5 h-5 text-slate-400 stroke-2">
                        <IconLink />
                    </span>
                    <div className='flex flex-1 items-center justify-between'>
                        <p className="text-base text-slate-900"> {link.title} </p>
                        <Button 
                            text={link.url}
                            size="sm"
                            type="secondary"
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
