// Konten porto Abel. Edit di sini buat ganti.
export const profile = {
  name: 'Muhammad Abel Abhinaya',
  short: 'ABEL',
  role: 'Frontend Developer',
  username: 'muhamadabel', // GitHub
  location: 'Indonesia',
  email: 'muhamadabelugm@gmail.com',
  tagline: 'Rapi di kode, niat di tampilan.',
  about: [
    'Frontend dev yang ngurusin detail sampai beres — bukan tipe "yaudah jadi". Sehari-hari di React, Next.js, sama Laravel, bikin sistem yang beneran dipake orang, bukan cuma cakep di Figma.',
    'Lagi getol automated testing (Selenium + Cucumber) biar tiap deploy nggak bikin jantungan. Buat gw, hal kecil kayak micro-interaction, loading state, sama error yang manusiawi itu yang bikin web kerasa beda.',
  ],
  focus: [
    'Bikin sistem informasi web — React · Next.js · Laravel',
    'Automated end-to-end testing — Selenium · Cucumber',
    'Ngulik UI/UX, accessibility & arsitektur frontend',
    'Bikin UI yang kerasa "mahal" tapi tetep ringan',
  ],
  facts: [
    { value: '3+', label: 'Tahun ngoding' },
    { value: '10+', label: 'Project digarap' },
    { value: '777', label: 'Lucky number' },
  ],
  socials: [
    { label: 'GitHub', handle: '@muhamadabel', href: 'https://github.com/muhamadabel' },
    {
      label: 'LinkedIn',
      handle: 'Muhammad Abel Abhinaya',
      href: 'https://www.linkedin.com/in/muhammad-abel-abhinaya-riananto-944376326/',
    },
    { label: 'Instagram', handle: '@mhmmdabel._', href: 'https://instagram.com/mhmmdabel._' },
    { label: 'Email', handle: 'muhamadabelugm@gmail.com', href: 'mailto:muhamadabelugm@gmail.com' },
  ],
}

export const stack = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Java'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Laravel', 'Node.js'] },
  { group: 'Tools & Testing', items: ['Git', 'Figma', 'Selenium', 'Cucumber'] },
]

// flat list buat marquee
export const skills = [
  'React', 'Next.js', 'TypeScript', 'Laravel', 'Tailwind', 'Node.js',
  'Selenium', 'Cucumber', 'Figma', 'PHP', 'Java', 'Git',
]

// project unggulan (kurasi) — di luar repo live dari GitHub
export const projects = [
  {
    title: 'SIA UGN',
    blurb:
      'Sistem Informasi Akademik Universitas — modul dosen (BKD, PAK, pengabdian). Frontend React + backend Laravel.',
    tags: ['React', 'Laravel', 'Sistem Informasi'],
    href: 'https://sia.trisuladana.com/',
  },
  {
    title: 'Rongsokin',
    blurb: 'Aplikasi jual-beli barang rongsok / daur ulang. Dibangun pakai Flutter.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    href: 'https://rongsokin.vercel.app/',
  },
  {
    title: 'E2E Testing Suite',
    blurb:
      'Automation testing modul dosen pakai Java + Selenium + Cucumber + Page Object Model. 21/21 skenario PASS.',
    tags: ['Selenium', 'Cucumber', 'Java'],
    href: '#',
  },
  {
    title: 'This Portfolio',
    blurb:
      'Website ini — porto bergaya culture biru/cream Y2K, bintang 3D, narik data live dari GitHub. React Three Fiber.',
    tags: ['React', 'R3F', 'Design'],
    href: '#',
  },
]
