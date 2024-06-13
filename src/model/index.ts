// 由于系统使用了魔术方法，该配置文件是必不可少的。
// 请先配置该文件，然后执行 npm run build:model 来生成 /prisma/schema.prisma 文件

import { Models, EnumTypes } from '@/types/modelBuild'
// 构建模型的 enum 类型配置
export const enums: EnumTypes = {
  STATUS: [
    'NORMAL',
    'PENDING',
    'DELETE',
    'FORBIDDEN'
  ],
  EDITOR: ['RICHTEXT', 'MARKDOWN'],
  GENDER: ['MAN', 'WOMAN']
}
// 构建模型数据结构，该代码为适用于 mysql 的装饰器配置。
// 如果使用 postgresql ，需要修改 modifiers 的配置。
// 参考官方网站： https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types
export const models: Models = {
  Article: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    title: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    channel_id: {
      type: 'Int',
      required: true
    },
    description: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    tags: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    content: {
      type: 'String',
      modifiers: '@db.LongText()'
    },
    markdown: {
      type: 'String',
      modifiers: '@db.LongText()'
    },
    img: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    video: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    author: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    origin: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    editor: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    user_id: {
      type: 'Int'
    },
    istop: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    hits: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    type: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    status: {
      type: 'STATUS',
      modifiers: '@default(NORMAL)',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Log: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    type: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    role: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    user_id: {
      type: 'Int',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Single: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    title: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    tags: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    content: {
      type: 'String',
      modifiers: '@db.LongText()'
    },
    markdown: {
      type: 'String',
      modifiers: '@db.LongText()'
    },
    hits: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    status: {
      type: 'STATUS',
      modifiers: '@default(NORMAL)',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Channel: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    pid: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    sort: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    keywords: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    description: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    status: {
      type: 'STATUS',
      modifiers: '@default(NORMAL)',
      required: true
    },
    img: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    website: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Manages: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    account: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    password: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    avatar: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    editor: {
      type: 'EDITOR',
      modifiers: '@default(RICHTEXT)',
      required: true
    },
    mobile: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    email: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Site: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    title: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    logo: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    keywords: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    description: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    copyright: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Author: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    avatar: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    editor: {
      type: 'EDITOR',
      modifiers: '@default(RICHTEXT)',
      required: true
    },
    mobile: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    email: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    website: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Origin: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    logo: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    contact: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    mobile: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    email: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    website: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Editor: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    account: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    password: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    avatar: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    editor: {
      type: 'EDITOR',
      modifiers: '@default(RICHTEXT)',
      required: true
    },
    mobile: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    email: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    website: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  User: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    account: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    password: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    avatar: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    signature: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    gender: {
      type: 'GENDER',
      modifiers: '@default(MAN)'
    },
    editor: {
      type: 'EDITOR',
      modifiers: '@default(RICHTEXT)'
    },
    mobile: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    email: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    website: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    status: {
      type: 'STATUS',
      modifiers: '@default(PENDING)'
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Tags: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    tags: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    channel_id: {
      type: 'Int',
      required: true
    },
    hits: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Show: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    link: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    img: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    status: {
      type: 'STATUS',
      modifiers: '@default(PENDING)',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  },
  Links: {
    id: {
      type: 'Int',
      modifiers: '@id @default(autoincrement())',
      required: true
    },
    name: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    logo: {
      type: 'String',
      modifiers: '@db.VarChar(255)'
    },
    link: {
      type: 'String',
      modifiers: '@db.VarChar(255)',
      required: true
    },
    mark: {
      type: 'String',
      modifiers: '@db.Text()'
    },
    sort: {
      type: 'Int',
      modifiers: '@default(0)',
      required: true
    },
    time: {
      type: 'DateTime',
      modifiers: '@default(now())',
      required: true
    }
  }
}
