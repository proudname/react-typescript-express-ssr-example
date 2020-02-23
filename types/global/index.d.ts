// tslint:disable: no-any

// css-modules
// import {EElementType, EPostTag} from "../../../website/src/enums";
// import {Post} from "../../../website/src/models/posts/PostModel";
// import {Event} from "../../../website/src/models/events/EventModel";
import { Store } from 'redux';

declare module '*.scss' {
  const styles: any;
  export default styles;
}

declare module '*.css' {
  const styles: any;
  export default styles;
}

// images
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.gif' {
  const content: string;
  export default content;
}
declare module '*.bmp' {
  const content: string;
  export default content;
}
declare module '*.ico' {
  const content: string;
  export default content;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
      MONGO_DB: string;
      NODE_ENV: 'dev' | 'production' | 'test';
      SERVICE_NAME: string;
      PORT: string;
    }
  }
  namespace Express {
    interface Response {
      fail: (message: string) => any;
      ok: (data?: any) => any;
    }
  }

  // Types

  type SuccessResponse<T = any> = { ok: true } & T;

  type DefaultResponseType<T = any> = SuccessResponse<T> | FailResponse;

  type InitInfo = {
    req: Request;
    res: Response;
    store: Store;
  };

  type ResourceResponse = string | false;

  //    Interfaces part

  type ExternalResource = {
    url: string;
    parser: PostParser | null;
    parse: () => Promise<string | false>;
  };

  interface PostParser {
    parsePost: (url: string) => Promise<string | false>;
  }

  interface CalendarReducer {
    items: Event[];
  }

  interface CalendarReducer {
    items: Event[];
  }

  interface User {
    name: string;
    password?: string;
    photo: string;
    email: string;
    profileLink: string;
    vkontakteID: string;
  }

  interface MenuItem {
    label: string;
    link: string;
    children?: MenuItem[];
    id?: string;
  }

  interface ActionReducer<T, E> {
    type: E;
    payload: T;
  }

  interface PropOptionsWithValidate {
    admin: boolean;
  }

  interface FailResponse {
    ok: false;
    message: string;
  }
}
