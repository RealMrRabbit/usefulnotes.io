import GodotIcon from '@/public/logos/godot.png';
import ArchIcon from '@/public/logos/archlinux.svg';
import UnityIcon from '@/public/logos/unity.svg';
import { NoteLinkData } from './note-link-data';


const archLinux: NoteLinkData = {
  svg: ArchIcon,
  svgLink: 'https://archlinux.org',
  name: 'Arch Linux',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

const godot: NoteLinkData = {
  svg: GodotIcon,
  svgLink: 'https://godotengine.org/',
  name: 'Godot',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
};

const unity: NoteLinkData = {
  svg: UnityIcon,
  svgLink: 'https://unity.com/',
  name: 'Unity',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'test2',
}

export const technologies = [archLinux, godot, unity]