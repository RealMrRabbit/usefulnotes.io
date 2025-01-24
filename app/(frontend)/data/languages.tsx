import PythonLogo from '@/public/logos/python.svg'
import RubyLogo from '@/public/logos/ruby.svg'
import { NoteLinkData } from './note-link-data';


const python: NoteLinkData = {
  svg: PythonLogo,
  svgLink: 'https://www.python.org/',
  name: 'Python',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

const ruby: NoteLinkData = {
  svg: RubyLogo,
  svgLink: 'https://www.ruby-lang.org/en/',
  name: 'Ruby',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

export const languages = [python, ruby]