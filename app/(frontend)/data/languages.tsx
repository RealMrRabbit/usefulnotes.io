import PythonLogo from '@/public/logos/python.svg'
import RubyLogo from '@/public/logos/ruby.svg'
import { NoteLinkData } from './note-link-data';


const python: NoteLinkData = {
  logo: PythonLogo,
  logoLink: 'https://www.python.org/',
  name: 'Python',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

const ruby: NoteLinkData = {
  logo: RubyLogo,
  logoLink: 'https://www.ruby-lang.org/en/',
  name: 'Ruby',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

export const languages = [python, ruby]