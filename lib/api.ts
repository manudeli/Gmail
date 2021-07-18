import { Uid } from './../model/users';
import { CurrentTab } from './../model/ui';
import { ThreadId, MailId, Thread } from '../model/mails';

// Initial Data
export const users = {
  'user-1': {
    username: 'Jonghyeon Ko',
    email: 'flowithusdev@gmail.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile0.jpg',
    starThreads: { 'thread-1': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
    snoozedThreads: {},
    deletedThreads: {
      'thread-1': [
        { isPerfectDelete: false },
        { 'mail-1': { isPerfectDelete: false } },
      ],
    },
  },
  'user-2': {
    username: 'Martin L. Olson',
    email: 'martin@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile1.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-3': {
    username: 'Nadine T. Campos',
    email: 'nadine@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile2.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-4': {
    username: 'Casey O. Robbins',
    email: 'casey@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile3.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-5': {
    username: 'Carla J. Naquin',
    email: 'carla@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile4.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
};

export const mails = {
  'mail-0': {
    from: 'user-1',
    to: { 'user-2': true, 'user-1': true },
    createdAt: 1626517113349,
    content: `Dear Jason, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip `,
    threadId: 'thread-0',
  },
  'mail-1': {
    from: 'user-2',
    to: { 'user-1': true },
    createdAt: 1606517113349,
    content: `Dear Rick, Lorem Ipsum essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more  Lorem Ip`,
    threadId: 'thread-1',
  },
  'mail-2': {
    from: 'user-3',
    to: { 'user-2': true },
    createdAt: 1626517113349,
    content: 'Dear Jason, reply to bla bla bla bla',
    threadId: 'thread-2',
  },
};

export const threads = {
  'thread-1': {
    title: '[TouchFlow] Hello, Jonghyeon',
    mails: ['mail-0', 'mail-1'],
    lastSender: 'user-1',
    lastSendTime: 1626517113349,
  },
  'thread-2': {
    title: '[Google] I should hire you',
    mails: ['mail-1', 'mail-2'],
    lastSender: 'user-2',
    lastSendTime: 1626517113349,
  },
  'thread-3': {
    title: 'thread-title3',
    mails: ['mail-2'],
    lastSender: 'user-3',
    lastSendTime: 1626517113349,
  },
};
