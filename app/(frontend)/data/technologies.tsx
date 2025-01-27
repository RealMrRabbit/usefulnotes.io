import GodotIcon from '@/public/logos/godot.png';
import ArchIcon from '@/public/logos/archlinux.svg';
import UnityIcon from '@/public/logos/unity.svg';
import { NoteLinkData } from './note-link-data';


const archLinux: NoteLinkData = {
  logo: ArchIcon,
  logoLink: 'https://archlinux.org',
  name: 'Arch Linux',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'https://wiki.archlinux.org/title/Installation_guide',
};

const godot: NoteLinkData = {
  logo: GodotIcon,
  logoLink: 'https://godotengine.org/',
  name: 'Godot',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'https://docs.godotengine.org/en/stable/getting_started/first_3d_game/index.html',
};

const unity: NoteLinkData = {
  logo: UnityIcon,
  logoLink: 'https://unity.com/',
  name: 'Unity',
  nameLink: '', // Add the name link if needed
  cheatSheetLink: 'test',
  gettingStartedLink: 'https://learn.unity.com/',
}

export const technologies = [archLinux, godot, unity]