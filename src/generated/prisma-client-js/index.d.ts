
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Banco
 * 
 */
export type Banco = $Result.DefaultSelection<Prisma.$BancoPayload>
/**
 * Model UsuarioBanco
 * 
 */
export type UsuarioBanco = $Result.DefaultSelection<Prisma.$UsuarioBancoPayload>
/**
 * Model TipoTransacoes
 * 
 */
export type TipoTransacoes = $Result.DefaultSelection<Prisma.$TipoTransacoesPayload>
/**
 * Model Categorias
 * 
 */
export type Categorias = $Result.DefaultSelection<Prisma.$CategoriasPayload>
/**
 * Model Transacoes
 * 
 */
export type Transacoes = $Result.DefaultSelection<Prisma.$TransacoesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banco`: Exposes CRUD operations for the **Banco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bancos
    * const bancos = await prisma.banco.findMany()
    * ```
    */
  get banco(): Prisma.BancoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioBanco`: Exposes CRUD operations for the **UsuarioBanco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioBancos
    * const usuarioBancos = await prisma.usuarioBanco.findMany()
    * ```
    */
  get usuarioBanco(): Prisma.UsuarioBancoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoTransacoes`: Exposes CRUD operations for the **TipoTransacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoTransacoes
    * const tipoTransacoes = await prisma.tipoTransacoes.findMany()
    * ```
    */
  get tipoTransacoes(): Prisma.TipoTransacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **Categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.CategoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transacoes`: Exposes CRUD operations for the **Transacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacoes
    * const transacoes = await prisma.transacoes.findMany()
    * ```
    */
  get transacoes(): Prisma.TransacoesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Banco: 'Banco',
    UsuarioBanco: 'UsuarioBanco',
    TipoTransacoes: 'TipoTransacoes',
    Categorias: 'Categorias',
    Transacoes: 'Transacoes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "banco" | "usuarioBanco" | "tipoTransacoes" | "categorias" | "transacoes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Banco: {
        payload: Prisma.$BancoPayload<ExtArgs>
        fields: Prisma.BancoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BancoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BancoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findFirst: {
            args: Prisma.BancoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BancoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findMany: {
            args: Prisma.BancoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          create: {
            args: Prisma.BancoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          createMany: {
            args: Prisma.BancoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BancoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          delete: {
            args: Prisma.BancoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          update: {
            args: Prisma.BancoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          deleteMany: {
            args: Prisma.BancoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BancoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BancoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          upsert: {
            args: Prisma.BancoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          aggregate: {
            args: Prisma.BancoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanco>
          }
          groupBy: {
            args: Prisma.BancoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BancoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BancoCountArgs<ExtArgs>
            result: $Utils.Optional<BancoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioBanco: {
        payload: Prisma.$UsuarioBancoPayload<ExtArgs>
        fields: Prisma.UsuarioBancoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioBancoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioBancoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          findFirst: {
            args: Prisma.UsuarioBancoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioBancoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          findMany: {
            args: Prisma.UsuarioBancoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>[]
          }
          create: {
            args: Prisma.UsuarioBancoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          createMany: {
            args: Prisma.UsuarioBancoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioBancoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>[]
          }
          delete: {
            args: Prisma.UsuarioBancoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          update: {
            args: Prisma.UsuarioBancoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioBancoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioBancoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioBancoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioBancoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioBancoPayload>
          }
          aggregate: {
            args: Prisma.UsuarioBancoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioBanco>
          }
          groupBy: {
            args: Prisma.UsuarioBancoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioBancoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioBancoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioBancoCountAggregateOutputType> | number
          }
        }
      }
      TipoTransacoes: {
        payload: Prisma.$TipoTransacoesPayload<ExtArgs>
        fields: Prisma.TipoTransacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoTransacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoTransacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          findFirst: {
            args: Prisma.TipoTransacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoTransacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          findMany: {
            args: Prisma.TipoTransacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>[]
          }
          create: {
            args: Prisma.TipoTransacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          createMany: {
            args: Prisma.TipoTransacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoTransacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>[]
          }
          delete: {
            args: Prisma.TipoTransacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          update: {
            args: Prisma.TipoTransacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          deleteMany: {
            args: Prisma.TipoTransacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoTransacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoTransacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>[]
          }
          upsert: {
            args: Prisma.TipoTransacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoTransacoesPayload>
          }
          aggregate: {
            args: Prisma.TipoTransacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoTransacoes>
          }
          groupBy: {
            args: Prisma.TipoTransacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoTransacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoTransacoesCountArgs<ExtArgs>
            result: $Utils.Optional<TipoTransacoesCountAggregateOutputType> | number
          }
        }
      }
      Categorias: {
        payload: Prisma.$CategoriasPayload<ExtArgs>
        fields: Prisma.CategoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findFirst: {
            args: Prisma.CategoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findMany: {
            args: Prisma.CategoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          create: {
            args: Prisma.CategoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          createMany: {
            args: Prisma.CategoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          delete: {
            args: Prisma.CategoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          update: {
            args: Prisma.CategoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          deleteMany: {
            args: Prisma.CategoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          upsert: {
            args: Prisma.CategoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.CategoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      Transacoes: {
        payload: Prisma.$TransacoesPayload<ExtArgs>
        fields: Prisma.TransacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          findFirst: {
            args: Prisma.TransacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          findMany: {
            args: Prisma.TransacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>[]
          }
          create: {
            args: Prisma.TransacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          createMany: {
            args: Prisma.TransacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>[]
          }
          delete: {
            args: Prisma.TransacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          update: {
            args: Prisma.TransacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          deleteMany: {
            args: Prisma.TransacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>[]
          }
          upsert: {
            args: Prisma.TransacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacoesPayload>
          }
          aggregate: {
            args: Prisma.TransacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacoes>
          }
          groupBy: {
            args: Prisma.TransacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacoesCountArgs<ExtArgs>
            result: $Utils.Optional<TransacoesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    banco?: BancoOmit
    usuarioBanco?: UsuarioBancoOmit
    tipoTransacoes?: TipoTransacoesOmit
    categorias?: CategoriasOmit
    transacoes?: TransacoesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    UsuarioBanco: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsuarioBanco?: boolean | UsuarioCountOutputTypeCountUsuarioBancoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuarioBancoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioBancoWhereInput
  }


  /**
   * Count Type BancoCountOutputType
   */

  export type BancoCountOutputType = {
    UsuarioBanco: number
    Transacoes: number
  }

  export type BancoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsuarioBanco?: boolean | BancoCountOutputTypeCountUsuarioBancoArgs
    Transacoes?: boolean | BancoCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoCountOutputType
     */
    select?: BancoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeCountUsuarioBancoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioBancoWhereInput
  }

  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacoesWhereInput
  }


  /**
   * Count Type TipoTransacoesCountOutputType
   */

  export type TipoTransacoesCountOutputType = {
    Transacoes: number
  }

  export type TipoTransacoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transacoes?: boolean | TipoTransacoesCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * TipoTransacoesCountOutputType without action
   */
  export type TipoTransacoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoesCountOutputType
     */
    select?: TipoTransacoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoTransacoesCountOutputType without action
   */
  export type TipoTransacoesCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacoesWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    Transacoes: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transacoes?: boolean | CategoriasCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacoesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UsuarioBanco?: boolean | Usuario$UsuarioBancoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsuarioBanco?: boolean | Usuario$UsuarioBancoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      UsuarioBanco: Prisma.$UsuarioBancoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UsuarioBanco<T extends Usuario$UsuarioBancoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$UsuarioBancoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.UsuarioBanco
   */
  export type Usuario$UsuarioBancoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    where?: UsuarioBancoWhereInput
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    cursor?: UsuarioBancoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioBancoScalarFieldEnum | UsuarioBancoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Banco
   */

  export type AggregateBanco = {
    _count: BancoCountAggregateOutputType | null
    _avg: BancoAvgAggregateOutputType | null
    _sum: BancoSumAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  export type BancoAvgAggregateOutputType = {
    id: number | null
  }

  export type BancoSumAggregateOutputType = {
    id: number | null
  }

  export type BancoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    logoBase64: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BancoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    logoBase64: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BancoCountAggregateOutputType = {
    id: number
    nome: number
    logoBase64: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BancoAvgAggregateInputType = {
    id?: true
  }

  export type BancoSumAggregateInputType = {
    id?: true
  }

  export type BancoMinAggregateInputType = {
    id?: true
    nome?: true
    logoBase64?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BancoMaxAggregateInputType = {
    id?: true
    nome?: true
    logoBase64?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BancoCountAggregateInputType = {
    id?: true
    nome?: true
    logoBase64?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BancoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banco to aggregate.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bancos
    **/
    _count?: true | BancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BancoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BancoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BancoMaxAggregateInputType
  }

  export type GetBancoAggregateType<T extends BancoAggregateArgs> = {
        [P in keyof T & keyof AggregateBanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanco[P]>
      : GetScalarType<T[P], AggregateBanco[P]>
  }




  export type BancoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancoWhereInput
    orderBy?: BancoOrderByWithAggregationInput | BancoOrderByWithAggregationInput[]
    by: BancoScalarFieldEnum[] | BancoScalarFieldEnum
    having?: BancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BancoCountAggregateInputType | true
    _avg?: BancoAvgAggregateInputType
    _sum?: BancoSumAggregateInputType
    _min?: BancoMinAggregateInputType
    _max?: BancoMaxAggregateInputType
  }

  export type BancoGroupByOutputType = {
    id: number
    nome: string
    logoBase64: string
    createdAt: Date
    updatedAt: Date
    _count: BancoCountAggregateOutputType | null
    _avg: BancoAvgAggregateOutputType | null
    _sum: BancoSumAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  type GetBancoGroupByPayload<T extends BancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BancoGroupByOutputType[P]>
            : GetScalarType<T[P], BancoGroupByOutputType[P]>
        }
      >
    >


  export type BancoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logoBase64?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UsuarioBanco?: boolean | Banco$UsuarioBancoArgs<ExtArgs>
    Transacoes?: boolean | Banco$TransacoesArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logoBase64?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logoBase64?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectScalar = {
    id?: boolean
    nome?: boolean
    logoBase64?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BancoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "logoBase64" | "createdAt" | "updatedAt", ExtArgs["result"]["banco"]>
  export type BancoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UsuarioBanco?: boolean | Banco$UsuarioBancoArgs<ExtArgs>
    Transacoes?: boolean | Banco$TransacoesArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BancoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BancoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BancoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banco"
    objects: {
      UsuarioBanco: Prisma.$UsuarioBancoPayload<ExtArgs>[]
      Transacoes: Prisma.$TransacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      logoBase64: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banco"]>
    composites: {}
  }

  type BancoGetPayload<S extends boolean | null | undefined | BancoDefaultArgs> = $Result.GetResult<Prisma.$BancoPayload, S>

  type BancoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BancoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BancoCountAggregateInputType | true
    }

  export interface BancoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banco'], meta: { name: 'Banco' } }
    /**
     * Find zero or one Banco that matches the filter.
     * @param {BancoFindUniqueArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BancoFindUniqueArgs>(args: SelectSubset<T, BancoFindUniqueArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BancoFindUniqueOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BancoFindUniqueOrThrowArgs>(args: SelectSubset<T, BancoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BancoFindFirstArgs>(args?: SelectSubset<T, BancoFindFirstArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BancoFindFirstOrThrowArgs>(args?: SelectSubset<T, BancoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bancos
     * const bancos = await prisma.banco.findMany()
     * 
     * // Get first 10 Bancos
     * const bancos = await prisma.banco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bancoWithIdOnly = await prisma.banco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BancoFindManyArgs>(args?: SelectSubset<T, BancoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banco.
     * @param {BancoCreateArgs} args - Arguments to create a Banco.
     * @example
     * // Create one Banco
     * const Banco = await prisma.banco.create({
     *   data: {
     *     // ... data to create a Banco
     *   }
     * })
     * 
     */
    create<T extends BancoCreateArgs>(args: SelectSubset<T, BancoCreateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bancos.
     * @param {BancoCreateManyArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BancoCreateManyArgs>(args?: SelectSubset<T, BancoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bancos and returns the data saved in the database.
     * @param {BancoCreateManyAndReturnArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BancoCreateManyAndReturnArgs>(args?: SelectSubset<T, BancoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banco.
     * @param {BancoDeleteArgs} args - Arguments to delete one Banco.
     * @example
     * // Delete one Banco
     * const Banco = await prisma.banco.delete({
     *   where: {
     *     // ... filter to delete one Banco
     *   }
     * })
     * 
     */
    delete<T extends BancoDeleteArgs>(args: SelectSubset<T, BancoDeleteArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banco.
     * @param {BancoUpdateArgs} args - Arguments to update one Banco.
     * @example
     * // Update one Banco
     * const banco = await prisma.banco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BancoUpdateArgs>(args: SelectSubset<T, BancoUpdateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bancos.
     * @param {BancoDeleteManyArgs} args - Arguments to filter Bancos to delete.
     * @example
     * // Delete a few Bancos
     * const { count } = await prisma.banco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BancoDeleteManyArgs>(args?: SelectSubset<T, BancoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BancoUpdateManyArgs>(args: SelectSubset<T, BancoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos and returns the data updated in the database.
     * @param {BancoUpdateManyAndReturnArgs} args - Arguments to update many Bancos.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BancoUpdateManyAndReturnArgs>(args: SelectSubset<T, BancoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banco.
     * @param {BancoUpsertArgs} args - Arguments to update or create a Banco.
     * @example
     * // Update or create a Banco
     * const banco = await prisma.banco.upsert({
     *   create: {
     *     // ... data to create a Banco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banco we want to update
     *   }
     * })
     */
    upsert<T extends BancoUpsertArgs>(args: SelectSubset<T, BancoUpsertArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoCountArgs} args - Arguments to filter Bancos to count.
     * @example
     * // Count the number of Bancos
     * const count = await prisma.banco.count({
     *   where: {
     *     // ... the filter for the Bancos we want to count
     *   }
     * })
    **/
    count<T extends BancoCountArgs>(
      args?: Subset<T, BancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BancoAggregateArgs>(args: Subset<T, BancoAggregateArgs>): Prisma.PrismaPromise<GetBancoAggregateType<T>>

    /**
     * Group by Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BancoGroupByArgs['orderBy'] }
        : { orderBy?: BancoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banco model
   */
  readonly fields: BancoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BancoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UsuarioBanco<T extends Banco$UsuarioBancoArgs<ExtArgs> = {}>(args?: Subset<T, Banco$UsuarioBancoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transacoes<T extends Banco$TransacoesArgs<ExtArgs> = {}>(args?: Subset<T, Banco$TransacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banco model
   */
  interface BancoFieldRefs {
    readonly id: FieldRef<"Banco", 'Int'>
    readonly nome: FieldRef<"Banco", 'String'>
    readonly logoBase64: FieldRef<"Banco", 'String'>
    readonly createdAt: FieldRef<"Banco", 'DateTime'>
    readonly updatedAt: FieldRef<"Banco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banco findUnique
   */
  export type BancoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findUniqueOrThrow
   */
  export type BancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findFirst
   */
  export type BancoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findFirstOrThrow
   */
  export type BancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findMany
   */
  export type BancoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Bancos to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco create
   */
  export type BancoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to create a Banco.
     */
    data: XOR<BancoCreateInput, BancoUncheckedCreateInput>
  }

  /**
   * Banco createMany
   */
  export type BancoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
  }

  /**
   * Banco createManyAndReturn
   */
  export type BancoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
  }

  /**
   * Banco update
   */
  export type BancoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to update a Banco.
     */
    data: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
    /**
     * Choose, which Banco to update.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco updateMany
   */
  export type BancoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
  }

  /**
   * Banco updateManyAndReturn
   */
  export type BancoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
  }

  /**
   * Banco upsert
   */
  export type BancoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The filter to search for the Banco to update in case it exists.
     */
    where: BancoWhereUniqueInput
    /**
     * In case the Banco found by the `where` argument doesn't exist, create a new Banco with this data.
     */
    create: XOR<BancoCreateInput, BancoUncheckedCreateInput>
    /**
     * In case the Banco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
  }

  /**
   * Banco delete
   */
  export type BancoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter which Banco to delete.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco deleteMany
   */
  export type BancoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bancos to delete
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to delete.
     */
    limit?: number
  }

  /**
   * Banco.UsuarioBanco
   */
  export type Banco$UsuarioBancoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    where?: UsuarioBancoWhereInput
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    cursor?: UsuarioBancoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioBancoScalarFieldEnum | UsuarioBancoScalarFieldEnum[]
  }

  /**
   * Banco.Transacoes
   */
  export type Banco$TransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    where?: TransacoesWhereInput
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    cursor?: TransacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * Banco without action
   */
  export type BancoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioBanco
   */

  export type AggregateUsuarioBanco = {
    _count: UsuarioBancoCountAggregateOutputType | null
    _avg: UsuarioBancoAvgAggregateOutputType | null
    _sum: UsuarioBancoSumAggregateOutputType | null
    _min: UsuarioBancoMinAggregateOutputType | null
    _max: UsuarioBancoMaxAggregateOutputType | null
  }

  export type UsuarioBancoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    bancoId: number | null
  }

  export type UsuarioBancoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    bancoId: number | null
  }

  export type UsuarioBancoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    bancoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioBancoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    bancoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioBancoCountAggregateOutputType = {
    id: number
    usuarioId: number
    bancoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioBancoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    bancoId?: true
  }

  export type UsuarioBancoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    bancoId?: true
  }

  export type UsuarioBancoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    bancoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioBancoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    bancoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioBancoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    bancoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioBancoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioBanco to aggregate.
     */
    where?: UsuarioBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioBancos to fetch.
     */
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioBancos
    **/
    _count?: true | UsuarioBancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioBancoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioBancoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioBancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioBancoMaxAggregateInputType
  }

  export type GetUsuarioBancoAggregateType<T extends UsuarioBancoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioBanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioBanco[P]>
      : GetScalarType<T[P], AggregateUsuarioBanco[P]>
  }




  export type UsuarioBancoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioBancoWhereInput
    orderBy?: UsuarioBancoOrderByWithAggregationInput | UsuarioBancoOrderByWithAggregationInput[]
    by: UsuarioBancoScalarFieldEnum[] | UsuarioBancoScalarFieldEnum
    having?: UsuarioBancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioBancoCountAggregateInputType | true
    _avg?: UsuarioBancoAvgAggregateInputType
    _sum?: UsuarioBancoSumAggregateInputType
    _min?: UsuarioBancoMinAggregateInputType
    _max?: UsuarioBancoMaxAggregateInputType
  }

  export type UsuarioBancoGroupByOutputType = {
    id: number
    usuarioId: number
    bancoId: number
    createdAt: Date
    updatedAt: Date
    _count: UsuarioBancoCountAggregateOutputType | null
    _avg: UsuarioBancoAvgAggregateOutputType | null
    _sum: UsuarioBancoSumAggregateOutputType | null
    _min: UsuarioBancoMinAggregateOutputType | null
    _max: UsuarioBancoMaxAggregateOutputType | null
  }

  type GetUsuarioBancoGroupByPayload<T extends UsuarioBancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioBancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioBancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioBancoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioBancoGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioBancoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    bancoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioBanco"]>

  export type UsuarioBancoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    bancoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioBanco"]>

  export type UsuarioBancoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    bancoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioBanco"]>

  export type UsuarioBancoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    bancoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioBancoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "bancoId" | "createdAt" | "updatedAt", ExtArgs["result"]["usuarioBanco"]>
  export type UsuarioBancoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type UsuarioBancoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type UsuarioBancoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }

  export type $UsuarioBancoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioBanco"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      banco: Prisma.$BancoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      bancoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuarioBanco"]>
    composites: {}
  }

  type UsuarioBancoGetPayload<S extends boolean | null | undefined | UsuarioBancoDefaultArgs> = $Result.GetResult<Prisma.$UsuarioBancoPayload, S>

  type UsuarioBancoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioBancoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioBancoCountAggregateInputType | true
    }

  export interface UsuarioBancoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioBanco'], meta: { name: 'UsuarioBanco' } }
    /**
     * Find zero or one UsuarioBanco that matches the filter.
     * @param {UsuarioBancoFindUniqueArgs} args - Arguments to find a UsuarioBanco
     * @example
     * // Get one UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioBancoFindUniqueArgs>(args: SelectSubset<T, UsuarioBancoFindUniqueArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioBanco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioBancoFindUniqueOrThrowArgs} args - Arguments to find a UsuarioBanco
     * @example
     * // Get one UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioBancoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioBancoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioBanco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoFindFirstArgs} args - Arguments to find a UsuarioBanco
     * @example
     * // Get one UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioBancoFindFirstArgs>(args?: SelectSubset<T, UsuarioBancoFindFirstArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioBanco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoFindFirstOrThrowArgs} args - Arguments to find a UsuarioBanco
     * @example
     * // Get one UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioBancoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioBancoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioBancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioBancos
     * const usuarioBancos = await prisma.usuarioBanco.findMany()
     * 
     * // Get first 10 UsuarioBancos
     * const usuarioBancos = await prisma.usuarioBanco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioBancoWithIdOnly = await prisma.usuarioBanco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioBancoFindManyArgs>(args?: SelectSubset<T, UsuarioBancoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioBanco.
     * @param {UsuarioBancoCreateArgs} args - Arguments to create a UsuarioBanco.
     * @example
     * // Create one UsuarioBanco
     * const UsuarioBanco = await prisma.usuarioBanco.create({
     *   data: {
     *     // ... data to create a UsuarioBanco
     *   }
     * })
     * 
     */
    create<T extends UsuarioBancoCreateArgs>(args: SelectSubset<T, UsuarioBancoCreateArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioBancos.
     * @param {UsuarioBancoCreateManyArgs} args - Arguments to create many UsuarioBancos.
     * @example
     * // Create many UsuarioBancos
     * const usuarioBanco = await prisma.usuarioBanco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioBancoCreateManyArgs>(args?: SelectSubset<T, UsuarioBancoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioBancos and returns the data saved in the database.
     * @param {UsuarioBancoCreateManyAndReturnArgs} args - Arguments to create many UsuarioBancos.
     * @example
     * // Create many UsuarioBancos
     * const usuarioBanco = await prisma.usuarioBanco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioBancos and only return the `id`
     * const usuarioBancoWithIdOnly = await prisma.usuarioBanco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioBancoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioBancoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioBanco.
     * @param {UsuarioBancoDeleteArgs} args - Arguments to delete one UsuarioBanco.
     * @example
     * // Delete one UsuarioBanco
     * const UsuarioBanco = await prisma.usuarioBanco.delete({
     *   where: {
     *     // ... filter to delete one UsuarioBanco
     *   }
     * })
     * 
     */
    delete<T extends UsuarioBancoDeleteArgs>(args: SelectSubset<T, UsuarioBancoDeleteArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioBanco.
     * @param {UsuarioBancoUpdateArgs} args - Arguments to update one UsuarioBanco.
     * @example
     * // Update one UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioBancoUpdateArgs>(args: SelectSubset<T, UsuarioBancoUpdateArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioBancos.
     * @param {UsuarioBancoDeleteManyArgs} args - Arguments to filter UsuarioBancos to delete.
     * @example
     * // Delete a few UsuarioBancos
     * const { count } = await prisma.usuarioBanco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioBancoDeleteManyArgs>(args?: SelectSubset<T, UsuarioBancoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioBancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioBancos
     * const usuarioBanco = await prisma.usuarioBanco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioBancoUpdateManyArgs>(args: SelectSubset<T, UsuarioBancoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioBancos and returns the data updated in the database.
     * @param {UsuarioBancoUpdateManyAndReturnArgs} args - Arguments to update many UsuarioBancos.
     * @example
     * // Update many UsuarioBancos
     * const usuarioBanco = await prisma.usuarioBanco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioBancos and only return the `id`
     * const usuarioBancoWithIdOnly = await prisma.usuarioBanco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioBancoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioBancoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioBanco.
     * @param {UsuarioBancoUpsertArgs} args - Arguments to update or create a UsuarioBanco.
     * @example
     * // Update or create a UsuarioBanco
     * const usuarioBanco = await prisma.usuarioBanco.upsert({
     *   create: {
     *     // ... data to create a UsuarioBanco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioBanco we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioBancoUpsertArgs>(args: SelectSubset<T, UsuarioBancoUpsertArgs<ExtArgs>>): Prisma__UsuarioBancoClient<$Result.GetResult<Prisma.$UsuarioBancoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioBancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoCountArgs} args - Arguments to filter UsuarioBancos to count.
     * @example
     * // Count the number of UsuarioBancos
     * const count = await prisma.usuarioBanco.count({
     *   where: {
     *     // ... the filter for the UsuarioBancos we want to count
     *   }
     * })
    **/
    count<T extends UsuarioBancoCountArgs>(
      args?: Subset<T, UsuarioBancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioBancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioBanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioBancoAggregateArgs>(args: Subset<T, UsuarioBancoAggregateArgs>): Prisma.PrismaPromise<GetUsuarioBancoAggregateType<T>>

    /**
     * Group by UsuarioBanco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioBancoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioBancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioBancoGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioBancoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioBancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioBancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioBanco model
   */
  readonly fields: UsuarioBancoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioBanco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioBancoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    banco<T extends BancoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancoDefaultArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioBanco model
   */
  interface UsuarioBancoFieldRefs {
    readonly id: FieldRef<"UsuarioBanco", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioBanco", 'Int'>
    readonly bancoId: FieldRef<"UsuarioBanco", 'Int'>
    readonly createdAt: FieldRef<"UsuarioBanco", 'DateTime'>
    readonly updatedAt: FieldRef<"UsuarioBanco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioBanco findUnique
   */
  export type UsuarioBancoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioBanco to fetch.
     */
    where: UsuarioBancoWhereUniqueInput
  }

  /**
   * UsuarioBanco findUniqueOrThrow
   */
  export type UsuarioBancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioBanco to fetch.
     */
    where: UsuarioBancoWhereUniqueInput
  }

  /**
   * UsuarioBanco findFirst
   */
  export type UsuarioBancoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioBanco to fetch.
     */
    where?: UsuarioBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioBancos to fetch.
     */
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioBancos.
     */
    cursor?: UsuarioBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioBancos.
     */
    distinct?: UsuarioBancoScalarFieldEnum | UsuarioBancoScalarFieldEnum[]
  }

  /**
   * UsuarioBanco findFirstOrThrow
   */
  export type UsuarioBancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioBanco to fetch.
     */
    where?: UsuarioBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioBancos to fetch.
     */
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioBancos.
     */
    cursor?: UsuarioBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioBancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioBancos.
     */
    distinct?: UsuarioBancoScalarFieldEnum | UsuarioBancoScalarFieldEnum[]
  }

  /**
   * UsuarioBanco findMany
   */
  export type UsuarioBancoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioBancos to fetch.
     */
    where?: UsuarioBancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioBancos to fetch.
     */
    orderBy?: UsuarioBancoOrderByWithRelationInput | UsuarioBancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioBancos.
     */
    cursor?: UsuarioBancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioBancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioBancos.
     */
    skip?: number
    distinct?: UsuarioBancoScalarFieldEnum | UsuarioBancoScalarFieldEnum[]
  }

  /**
   * UsuarioBanco create
   */
  export type UsuarioBancoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioBanco.
     */
    data: XOR<UsuarioBancoCreateInput, UsuarioBancoUncheckedCreateInput>
  }

  /**
   * UsuarioBanco createMany
   */
  export type UsuarioBancoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioBancos.
     */
    data: UsuarioBancoCreateManyInput | UsuarioBancoCreateManyInput[]
  }

  /**
   * UsuarioBanco createManyAndReturn
   */
  export type UsuarioBancoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioBancos.
     */
    data: UsuarioBancoCreateManyInput | UsuarioBancoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioBanco update
   */
  export type UsuarioBancoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioBanco.
     */
    data: XOR<UsuarioBancoUpdateInput, UsuarioBancoUncheckedUpdateInput>
    /**
     * Choose, which UsuarioBanco to update.
     */
    where: UsuarioBancoWhereUniqueInput
  }

  /**
   * UsuarioBanco updateMany
   */
  export type UsuarioBancoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioBancos.
     */
    data: XOR<UsuarioBancoUpdateManyMutationInput, UsuarioBancoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioBancos to update
     */
    where?: UsuarioBancoWhereInput
    /**
     * Limit how many UsuarioBancos to update.
     */
    limit?: number
  }

  /**
   * UsuarioBanco updateManyAndReturn
   */
  export type UsuarioBancoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioBancos.
     */
    data: XOR<UsuarioBancoUpdateManyMutationInput, UsuarioBancoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioBancos to update
     */
    where?: UsuarioBancoWhereInput
    /**
     * Limit how many UsuarioBancos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioBanco upsert
   */
  export type UsuarioBancoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioBanco to update in case it exists.
     */
    where: UsuarioBancoWhereUniqueInput
    /**
     * In case the UsuarioBanco found by the `where` argument doesn't exist, create a new UsuarioBanco with this data.
     */
    create: XOR<UsuarioBancoCreateInput, UsuarioBancoUncheckedCreateInput>
    /**
     * In case the UsuarioBanco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioBancoUpdateInput, UsuarioBancoUncheckedUpdateInput>
  }

  /**
   * UsuarioBanco delete
   */
  export type UsuarioBancoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
    /**
     * Filter which UsuarioBanco to delete.
     */
    where: UsuarioBancoWhereUniqueInput
  }

  /**
   * UsuarioBanco deleteMany
   */
  export type UsuarioBancoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioBancos to delete
     */
    where?: UsuarioBancoWhereInput
    /**
     * Limit how many UsuarioBancos to delete.
     */
    limit?: number
  }

  /**
   * UsuarioBanco without action
   */
  export type UsuarioBancoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioBanco
     */
    select?: UsuarioBancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioBanco
     */
    omit?: UsuarioBancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioBancoInclude<ExtArgs> | null
  }


  /**
   * Model TipoTransacoes
   */

  export type AggregateTipoTransacoes = {
    _count: TipoTransacoesCountAggregateOutputType | null
    _avg: TipoTransacoesAvgAggregateOutputType | null
    _sum: TipoTransacoesSumAggregateOutputType | null
    _min: TipoTransacoesMinAggregateOutputType | null
    _max: TipoTransacoesMaxAggregateOutputType | null
  }

  export type TipoTransacoesAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoTransacoesSumAggregateOutputType = {
    id: number | null
  }

  export type TipoTransacoesMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoTransacoesMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoTransacoesCountAggregateOutputType = {
    id: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoTransacoesAvgAggregateInputType = {
    id?: true
  }

  export type TipoTransacoesSumAggregateInputType = {
    id?: true
  }

  export type TipoTransacoesMinAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoTransacoesMaxAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoTransacoesCountAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoTransacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoTransacoes to aggregate.
     */
    where?: TipoTransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransacoes to fetch.
     */
    orderBy?: TipoTransacoesOrderByWithRelationInput | TipoTransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoTransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoTransacoes
    **/
    _count?: true | TipoTransacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoTransacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoTransacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoTransacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoTransacoesMaxAggregateInputType
  }

  export type GetTipoTransacoesAggregateType<T extends TipoTransacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoTransacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoTransacoes[P]>
      : GetScalarType<T[P], AggregateTipoTransacoes[P]>
  }




  export type TipoTransacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoTransacoesWhereInput
    orderBy?: TipoTransacoesOrderByWithAggregationInput | TipoTransacoesOrderByWithAggregationInput[]
    by: TipoTransacoesScalarFieldEnum[] | TipoTransacoesScalarFieldEnum
    having?: TipoTransacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoTransacoesCountAggregateInputType | true
    _avg?: TipoTransacoesAvgAggregateInputType
    _sum?: TipoTransacoesSumAggregateInputType
    _min?: TipoTransacoesMinAggregateInputType
    _max?: TipoTransacoesMaxAggregateInputType
  }

  export type TipoTransacoesGroupByOutputType = {
    id: number
    descricao: string
    createdAt: Date
    updatedAt: Date
    _count: TipoTransacoesCountAggregateOutputType | null
    _avg: TipoTransacoesAvgAggregateOutputType | null
    _sum: TipoTransacoesSumAggregateOutputType | null
    _min: TipoTransacoesMinAggregateOutputType | null
    _max: TipoTransacoesMaxAggregateOutputType | null
  }

  type GetTipoTransacoesGroupByPayload<T extends TipoTransacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoTransacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoTransacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoTransacoesGroupByOutputType[P]>
            : GetScalarType<T[P], TipoTransacoesGroupByOutputType[P]>
        }
      >
    >


  export type TipoTransacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Transacoes?: boolean | TipoTransacoes$TransacoesArgs<ExtArgs>
    _count?: boolean | TipoTransacoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoTransacoes"]>

  export type TipoTransacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoTransacoes"]>

  export type TipoTransacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoTransacoes"]>

  export type TipoTransacoesSelectScalar = {
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoTransacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoTransacoes"]>
  export type TipoTransacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transacoes?: boolean | TipoTransacoes$TransacoesArgs<ExtArgs>
    _count?: boolean | TipoTransacoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoTransacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoTransacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoTransacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoTransacoes"
    objects: {
      Transacoes: Prisma.$TransacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoTransacoes"]>
    composites: {}
  }

  type TipoTransacoesGetPayload<S extends boolean | null | undefined | TipoTransacoesDefaultArgs> = $Result.GetResult<Prisma.$TipoTransacoesPayload, S>

  type TipoTransacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoTransacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoTransacoesCountAggregateInputType | true
    }

  export interface TipoTransacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoTransacoes'], meta: { name: 'TipoTransacoes' } }
    /**
     * Find zero or one TipoTransacoes that matches the filter.
     * @param {TipoTransacoesFindUniqueArgs} args - Arguments to find a TipoTransacoes
     * @example
     * // Get one TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoTransacoesFindUniqueArgs>(args: SelectSubset<T, TipoTransacoesFindUniqueArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoTransacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoTransacoesFindUniqueOrThrowArgs} args - Arguments to find a TipoTransacoes
     * @example
     * // Get one TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoTransacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoTransacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoTransacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesFindFirstArgs} args - Arguments to find a TipoTransacoes
     * @example
     * // Get one TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoTransacoesFindFirstArgs>(args?: SelectSubset<T, TipoTransacoesFindFirstArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoTransacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesFindFirstOrThrowArgs} args - Arguments to find a TipoTransacoes
     * @example
     * // Get one TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoTransacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoTransacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoTransacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findMany()
     * 
     * // Get first 10 TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoTransacoesWithIdOnly = await prisma.tipoTransacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoTransacoesFindManyArgs>(args?: SelectSubset<T, TipoTransacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoTransacoes.
     * @param {TipoTransacoesCreateArgs} args - Arguments to create a TipoTransacoes.
     * @example
     * // Create one TipoTransacoes
     * const TipoTransacoes = await prisma.tipoTransacoes.create({
     *   data: {
     *     // ... data to create a TipoTransacoes
     *   }
     * })
     * 
     */
    create<T extends TipoTransacoesCreateArgs>(args: SelectSubset<T, TipoTransacoesCreateArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoTransacoes.
     * @param {TipoTransacoesCreateManyArgs} args - Arguments to create many TipoTransacoes.
     * @example
     * // Create many TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoTransacoesCreateManyArgs>(args?: SelectSubset<T, TipoTransacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoTransacoes and returns the data saved in the database.
     * @param {TipoTransacoesCreateManyAndReturnArgs} args - Arguments to create many TipoTransacoes.
     * @example
     * // Create many TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoTransacoes and only return the `id`
     * const tipoTransacoesWithIdOnly = await prisma.tipoTransacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoTransacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoTransacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoTransacoes.
     * @param {TipoTransacoesDeleteArgs} args - Arguments to delete one TipoTransacoes.
     * @example
     * // Delete one TipoTransacoes
     * const TipoTransacoes = await prisma.tipoTransacoes.delete({
     *   where: {
     *     // ... filter to delete one TipoTransacoes
     *   }
     * })
     * 
     */
    delete<T extends TipoTransacoesDeleteArgs>(args: SelectSubset<T, TipoTransacoesDeleteArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoTransacoes.
     * @param {TipoTransacoesUpdateArgs} args - Arguments to update one TipoTransacoes.
     * @example
     * // Update one TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoTransacoesUpdateArgs>(args: SelectSubset<T, TipoTransacoesUpdateArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoTransacoes.
     * @param {TipoTransacoesDeleteManyArgs} args - Arguments to filter TipoTransacoes to delete.
     * @example
     * // Delete a few TipoTransacoes
     * const { count } = await prisma.tipoTransacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoTransacoesDeleteManyArgs>(args?: SelectSubset<T, TipoTransacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoTransacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoTransacoesUpdateManyArgs>(args: SelectSubset<T, TipoTransacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoTransacoes and returns the data updated in the database.
     * @param {TipoTransacoesUpdateManyAndReturnArgs} args - Arguments to update many TipoTransacoes.
     * @example
     * // Update many TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoTransacoes and only return the `id`
     * const tipoTransacoesWithIdOnly = await prisma.tipoTransacoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoTransacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoTransacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoTransacoes.
     * @param {TipoTransacoesUpsertArgs} args - Arguments to update or create a TipoTransacoes.
     * @example
     * // Update or create a TipoTransacoes
     * const tipoTransacoes = await prisma.tipoTransacoes.upsert({
     *   create: {
     *     // ... data to create a TipoTransacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoTransacoes we want to update
     *   }
     * })
     */
    upsert<T extends TipoTransacoesUpsertArgs>(args: SelectSubset<T, TipoTransacoesUpsertArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoTransacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesCountArgs} args - Arguments to filter TipoTransacoes to count.
     * @example
     * // Count the number of TipoTransacoes
     * const count = await prisma.tipoTransacoes.count({
     *   where: {
     *     // ... the filter for the TipoTransacoes we want to count
     *   }
     * })
    **/
    count<T extends TipoTransacoesCountArgs>(
      args?: Subset<T, TipoTransacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoTransacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoTransacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoTransacoesAggregateArgs>(args: Subset<T, TipoTransacoesAggregateArgs>): Prisma.PrismaPromise<GetTipoTransacoesAggregateType<T>>

    /**
     * Group by TipoTransacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoTransacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoTransacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoTransacoesGroupByArgs['orderBy'] }
        : { orderBy?: TipoTransacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoTransacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoTransacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoTransacoes model
   */
  readonly fields: TipoTransacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoTransacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoTransacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transacoes<T extends TipoTransacoes$TransacoesArgs<ExtArgs> = {}>(args?: Subset<T, TipoTransacoes$TransacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoTransacoes model
   */
  interface TipoTransacoesFieldRefs {
    readonly id: FieldRef<"TipoTransacoes", 'Int'>
    readonly descricao: FieldRef<"TipoTransacoes", 'String'>
    readonly createdAt: FieldRef<"TipoTransacoes", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoTransacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoTransacoes findUnique
   */
  export type TipoTransacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransacoes to fetch.
     */
    where: TipoTransacoesWhereUniqueInput
  }

  /**
   * TipoTransacoes findUniqueOrThrow
   */
  export type TipoTransacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransacoes to fetch.
     */
    where: TipoTransacoesWhereUniqueInput
  }

  /**
   * TipoTransacoes findFirst
   */
  export type TipoTransacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransacoes to fetch.
     */
    where?: TipoTransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransacoes to fetch.
     */
    orderBy?: TipoTransacoesOrderByWithRelationInput | TipoTransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoTransacoes.
     */
    cursor?: TipoTransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoTransacoes.
     */
    distinct?: TipoTransacoesScalarFieldEnum | TipoTransacoesScalarFieldEnum[]
  }

  /**
   * TipoTransacoes findFirstOrThrow
   */
  export type TipoTransacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransacoes to fetch.
     */
    where?: TipoTransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransacoes to fetch.
     */
    orderBy?: TipoTransacoesOrderByWithRelationInput | TipoTransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoTransacoes.
     */
    cursor?: TipoTransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoTransacoes.
     */
    distinct?: TipoTransacoesScalarFieldEnum | TipoTransacoesScalarFieldEnum[]
  }

  /**
   * TipoTransacoes findMany
   */
  export type TipoTransacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter, which TipoTransacoes to fetch.
     */
    where?: TipoTransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoTransacoes to fetch.
     */
    orderBy?: TipoTransacoesOrderByWithRelationInput | TipoTransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoTransacoes.
     */
    cursor?: TipoTransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoTransacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoTransacoes.
     */
    skip?: number
    distinct?: TipoTransacoesScalarFieldEnum | TipoTransacoesScalarFieldEnum[]
  }

  /**
   * TipoTransacoes create
   */
  export type TipoTransacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoTransacoes.
     */
    data: XOR<TipoTransacoesCreateInput, TipoTransacoesUncheckedCreateInput>
  }

  /**
   * TipoTransacoes createMany
   */
  export type TipoTransacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoTransacoes.
     */
    data: TipoTransacoesCreateManyInput | TipoTransacoesCreateManyInput[]
  }

  /**
   * TipoTransacoes createManyAndReturn
   */
  export type TipoTransacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * The data used to create many TipoTransacoes.
     */
    data: TipoTransacoesCreateManyInput | TipoTransacoesCreateManyInput[]
  }

  /**
   * TipoTransacoes update
   */
  export type TipoTransacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoTransacoes.
     */
    data: XOR<TipoTransacoesUpdateInput, TipoTransacoesUncheckedUpdateInput>
    /**
     * Choose, which TipoTransacoes to update.
     */
    where: TipoTransacoesWhereUniqueInput
  }

  /**
   * TipoTransacoes updateMany
   */
  export type TipoTransacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoTransacoes.
     */
    data: XOR<TipoTransacoesUpdateManyMutationInput, TipoTransacoesUncheckedUpdateManyInput>
    /**
     * Filter which TipoTransacoes to update
     */
    where?: TipoTransacoesWhereInput
    /**
     * Limit how many TipoTransacoes to update.
     */
    limit?: number
  }

  /**
   * TipoTransacoes updateManyAndReturn
   */
  export type TipoTransacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * The data used to update TipoTransacoes.
     */
    data: XOR<TipoTransacoesUpdateManyMutationInput, TipoTransacoesUncheckedUpdateManyInput>
    /**
     * Filter which TipoTransacoes to update
     */
    where?: TipoTransacoesWhereInput
    /**
     * Limit how many TipoTransacoes to update.
     */
    limit?: number
  }

  /**
   * TipoTransacoes upsert
   */
  export type TipoTransacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoTransacoes to update in case it exists.
     */
    where: TipoTransacoesWhereUniqueInput
    /**
     * In case the TipoTransacoes found by the `where` argument doesn't exist, create a new TipoTransacoes with this data.
     */
    create: XOR<TipoTransacoesCreateInput, TipoTransacoesUncheckedCreateInput>
    /**
     * In case the TipoTransacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoTransacoesUpdateInput, TipoTransacoesUncheckedUpdateInput>
  }

  /**
   * TipoTransacoes delete
   */
  export type TipoTransacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
    /**
     * Filter which TipoTransacoes to delete.
     */
    where: TipoTransacoesWhereUniqueInput
  }

  /**
   * TipoTransacoes deleteMany
   */
  export type TipoTransacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoTransacoes to delete
     */
    where?: TipoTransacoesWhereInput
    /**
     * Limit how many TipoTransacoes to delete.
     */
    limit?: number
  }

  /**
   * TipoTransacoes.Transacoes
   */
  export type TipoTransacoes$TransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    where?: TransacoesWhereInput
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    cursor?: TransacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * TipoTransacoes without action
   */
  export type TipoTransacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoTransacoes
     */
    select?: TipoTransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoTransacoes
     */
    omit?: TipoTransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoTransacoesInclude<ExtArgs> | null
  }


  /**
   * Model Categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to aggregate.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriasWhereInput
    orderBy?: CategoriasOrderByWithAggregationInput | CategoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: CategoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type CategoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Transacoes?: boolean | Categorias$TransacoesArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["categorias"]>
  export type CategoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transacoes?: boolean | Categorias$TransacoesArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorias"
    objects: {
      Transacoes: Prisma.$TransacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type CategoriasGetPayload<S extends boolean | null | undefined | CategoriasDefaultArgs> = $Result.GetResult<Prisma.$CategoriasPayload, S>

  type CategoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface CategoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorias'], meta: { name: 'Categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {CategoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriasFindUniqueArgs>(args: SelectSubset<T, CategoriasFindUniqueArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriasFindFirstArgs>(args?: SelectSubset<T, CategoriasFindFirstArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriasFindManyArgs>(args?: SelectSubset<T, CategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {CategoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends CategoriasCreateArgs>(args: SelectSubset<T, CategoriasCreateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriasCreateManyArgs>(args?: SelectSubset<T, CategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {CategoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends CategoriasDeleteArgs>(args: SelectSubset<T, CategoriasDeleteArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {CategoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriasUpdateArgs>(args: SelectSubset<T, CategoriasUpdateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriasDeleteManyArgs>(args?: SelectSubset<T, CategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriasUpdateManyArgs>(args: SelectSubset<T, CategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {CategoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends CategoriasUpsertArgs>(args: SelectSubset<T, CategoriasUpsertArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriasCountArgs>(
      args?: Subset<T, CategoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorias model
   */
  readonly fields: CategoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transacoes<T extends Categorias$TransacoesArgs<ExtArgs> = {}>(args?: Subset<T, Categorias$TransacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorias model
   */
  interface CategoriasFieldRefs {
    readonly id: FieldRef<"Categorias", 'Int'>
    readonly nome: FieldRef<"Categorias", 'String'>
    readonly createdAt: FieldRef<"Categorias", 'DateTime'>
    readonly updatedAt: FieldRef<"Categorias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categorias findUnique
   */
  export type CategoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findUniqueOrThrow
   */
  export type CategoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findFirst
   */
  export type CategoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findFirstOrThrow
   */
  export type CategoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findMany
   */
  export type CategoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias create
   */
  export type CategoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorias.
     */
    data: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
  }

  /**
   * Categorias createMany
   */
  export type CategoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
  }

  /**
   * Categorias createManyAndReturn
   */
  export type CategoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
  }

  /**
   * Categorias update
   */
  export type CategoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorias.
     */
    data: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
    /**
     * Choose, which Categorias to update.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias updateMany
   */
  export type CategoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias updateManyAndReturn
   */
  export type CategoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias upsert
   */
  export type CategoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorias to update in case it exists.
     */
    where: CategoriasWhereUniqueInput
    /**
     * In case the Categorias found by the `where` argument doesn't exist, create a new Categorias with this data.
     */
    create: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
    /**
     * In case the Categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
  }

  /**
   * Categorias delete
   */
  export type CategoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter which Categorias to delete.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias deleteMany
   */
  export type CategoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categorias.Transacoes
   */
  export type Categorias$TransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    where?: TransacoesWhereInput
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    cursor?: TransacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * Categorias without action
   */
  export type CategoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
  }


  /**
   * Model Transacoes
   */

  export type AggregateTransacoes = {
    _count: TransacoesCountAggregateOutputType | null
    _avg: TransacoesAvgAggregateOutputType | null
    _sum: TransacoesSumAggregateOutputType | null
    _min: TransacoesMinAggregateOutputType | null
    _max: TransacoesMaxAggregateOutputType | null
  }

  export type TransacoesAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    tipoId: number | null
    categoriaId: number | null
    bancoid: number | null
  }

  export type TransacoesSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    tipoId: number | null
    categoriaId: number | null
    bancoid: number | null
  }

  export type TransacoesMinAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    valor: Decimal | null
    tipoId: number | null
    categoriaId: number | null
    bancoid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransacoesMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    valor: Decimal | null
    tipoId: number | null
    categoriaId: number | null
    bancoid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransacoesCountAggregateOutputType = {
    id: number
    data: number
    descricao: number
    valor: number
    tipoId: number
    categoriaId: number
    bancoid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransacoesAvgAggregateInputType = {
    id?: true
    valor?: true
    tipoId?: true
    categoriaId?: true
    bancoid?: true
  }

  export type TransacoesSumAggregateInputType = {
    id?: true
    valor?: true
    tipoId?: true
    categoriaId?: true
    bancoid?: true
  }

  export type TransacoesMinAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    valor?: true
    tipoId?: true
    categoriaId?: true
    bancoid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransacoesMaxAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    valor?: true
    tipoId?: true
    categoriaId?: true
    bancoid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransacoesCountAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    valor?: true
    tipoId?: true
    categoriaId?: true
    bancoid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacoes to aggregate.
     */
    where?: TransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacoes to fetch.
     */
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacoes
    **/
    _count?: true | TransacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacoesMaxAggregateInputType
  }

  export type GetTransacoesAggregateType<T extends TransacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacoes[P]>
      : GetScalarType<T[P], AggregateTransacoes[P]>
  }




  export type TransacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacoesWhereInput
    orderBy?: TransacoesOrderByWithAggregationInput | TransacoesOrderByWithAggregationInput[]
    by: TransacoesScalarFieldEnum[] | TransacoesScalarFieldEnum
    having?: TransacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacoesCountAggregateInputType | true
    _avg?: TransacoesAvgAggregateInputType
    _sum?: TransacoesSumAggregateInputType
    _min?: TransacoesMinAggregateInputType
    _max?: TransacoesMaxAggregateInputType
  }

  export type TransacoesGroupByOutputType = {
    id: number
    data: Date
    descricao: string
    valor: Decimal
    tipoId: number
    categoriaId: number
    bancoid: number
    createdAt: Date
    updatedAt: Date
    _count: TransacoesCountAggregateOutputType | null
    _avg: TransacoesAvgAggregateOutputType | null
    _sum: TransacoesSumAggregateOutputType | null
    _min: TransacoesMinAggregateOutputType | null
    _max: TransacoesMaxAggregateOutputType | null
  }

  type GetTransacoesGroupByPayload<T extends TransacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacoesGroupByOutputType[P]>
            : GetScalarType<T[P], TransacoesGroupByOutputType[P]>
        }
      >
    >


  export type TransacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    valor?: boolean
    tipoId?: boolean
    categoriaId?: boolean
    bancoid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacoes"]>

  export type TransacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    valor?: boolean
    tipoId?: boolean
    categoriaId?: boolean
    bancoid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacoes"]>

  export type TransacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    valor?: boolean
    tipoId?: boolean
    categoriaId?: boolean
    bancoid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacoes"]>

  export type TransacoesSelectScalar = {
    id?: boolean
    data?: boolean
    descricao?: boolean
    valor?: boolean
    tipoId?: boolean
    categoriaId?: boolean
    bancoid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "descricao" | "valor" | "tipoId" | "categoriaId" | "bancoid" | "createdAt" | "updatedAt", ExtArgs["result"]["transacoes"]>
  export type TransacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type TransacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type TransacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoTransacoesDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    bancos?: boolean | BancoDefaultArgs<ExtArgs>
  }

  export type $TransacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacoes"
    objects: {
      tipo: Prisma.$TipoTransacoesPayload<ExtArgs>
      categoria: Prisma.$CategoriasPayload<ExtArgs>
      bancos: Prisma.$BancoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      descricao: string
      valor: Prisma.Decimal
      tipoId: number
      categoriaId: number
      bancoid: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transacoes"]>
    composites: {}
  }

  type TransacoesGetPayload<S extends boolean | null | undefined | TransacoesDefaultArgs> = $Result.GetResult<Prisma.$TransacoesPayload, S>

  type TransacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacoesCountAggregateInputType | true
    }

  export interface TransacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacoes'], meta: { name: 'Transacoes' } }
    /**
     * Find zero or one Transacoes that matches the filter.
     * @param {TransacoesFindUniqueArgs} args - Arguments to find a Transacoes
     * @example
     * // Get one Transacoes
     * const transacoes = await prisma.transacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacoesFindUniqueArgs>(args: SelectSubset<T, TransacoesFindUniqueArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacoesFindUniqueOrThrowArgs} args - Arguments to find a Transacoes
     * @example
     * // Get one Transacoes
     * const transacoes = await prisma.transacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesFindFirstArgs} args - Arguments to find a Transacoes
     * @example
     * // Get one Transacoes
     * const transacoes = await prisma.transacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacoesFindFirstArgs>(args?: SelectSubset<T, TransacoesFindFirstArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesFindFirstOrThrowArgs} args - Arguments to find a Transacoes
     * @example
     * // Get one Transacoes
     * const transacoes = await prisma.transacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacoes
     * const transacoes = await prisma.transacoes.findMany()
     * 
     * // Get first 10 Transacoes
     * const transacoes = await prisma.transacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacoesWithIdOnly = await prisma.transacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacoesFindManyArgs>(args?: SelectSubset<T, TransacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacoes.
     * @param {TransacoesCreateArgs} args - Arguments to create a Transacoes.
     * @example
     * // Create one Transacoes
     * const Transacoes = await prisma.transacoes.create({
     *   data: {
     *     // ... data to create a Transacoes
     *   }
     * })
     * 
     */
    create<T extends TransacoesCreateArgs>(args: SelectSubset<T, TransacoesCreateArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacoes.
     * @param {TransacoesCreateManyArgs} args - Arguments to create many Transacoes.
     * @example
     * // Create many Transacoes
     * const transacoes = await prisma.transacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacoesCreateManyArgs>(args?: SelectSubset<T, TransacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacoes and returns the data saved in the database.
     * @param {TransacoesCreateManyAndReturnArgs} args - Arguments to create many Transacoes.
     * @example
     * // Create many Transacoes
     * const transacoes = await prisma.transacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacoes and only return the `id`
     * const transacoesWithIdOnly = await prisma.transacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transacoes.
     * @param {TransacoesDeleteArgs} args - Arguments to delete one Transacoes.
     * @example
     * // Delete one Transacoes
     * const Transacoes = await prisma.transacoes.delete({
     *   where: {
     *     // ... filter to delete one Transacoes
     *   }
     * })
     * 
     */
    delete<T extends TransacoesDeleteArgs>(args: SelectSubset<T, TransacoesDeleteArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacoes.
     * @param {TransacoesUpdateArgs} args - Arguments to update one Transacoes.
     * @example
     * // Update one Transacoes
     * const transacoes = await prisma.transacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacoesUpdateArgs>(args: SelectSubset<T, TransacoesUpdateArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacoes.
     * @param {TransacoesDeleteManyArgs} args - Arguments to filter Transacoes to delete.
     * @example
     * // Delete a few Transacoes
     * const { count } = await prisma.transacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacoesDeleteManyArgs>(args?: SelectSubset<T, TransacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacoes
     * const transacoes = await prisma.transacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacoesUpdateManyArgs>(args: SelectSubset<T, TransacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacoes and returns the data updated in the database.
     * @param {TransacoesUpdateManyAndReturnArgs} args - Arguments to update many Transacoes.
     * @example
     * // Update many Transacoes
     * const transacoes = await prisma.transacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transacoes and only return the `id`
     * const transacoesWithIdOnly = await prisma.transacoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, TransacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transacoes.
     * @param {TransacoesUpsertArgs} args - Arguments to update or create a Transacoes.
     * @example
     * // Update or create a Transacoes
     * const transacoes = await prisma.transacoes.upsert({
     *   create: {
     *     // ... data to create a Transacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacoes we want to update
     *   }
     * })
     */
    upsert<T extends TransacoesUpsertArgs>(args: SelectSubset<T, TransacoesUpsertArgs<ExtArgs>>): Prisma__TransacoesClient<$Result.GetResult<Prisma.$TransacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesCountArgs} args - Arguments to filter Transacoes to count.
     * @example
     * // Count the number of Transacoes
     * const count = await prisma.transacoes.count({
     *   where: {
     *     // ... the filter for the Transacoes we want to count
     *   }
     * })
    **/
    count<T extends TransacoesCountArgs>(
      args?: Subset<T, TransacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacoesAggregateArgs>(args: Subset<T, TransacoesAggregateArgs>): Prisma.PrismaPromise<GetTransacoesAggregateType<T>>

    /**
     * Group by Transacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacoesGroupByArgs['orderBy'] }
        : { orderBy?: TransacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacoes model
   */
  readonly fields: TransacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoTransacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoTransacoesDefaultArgs<ExtArgs>>): Prisma__TipoTransacoesClient<$Result.GetResult<Prisma.$TipoTransacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriasDefaultArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bancos<T extends BancoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancoDefaultArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transacoes model
   */
  interface TransacoesFieldRefs {
    readonly id: FieldRef<"Transacoes", 'Int'>
    readonly data: FieldRef<"Transacoes", 'DateTime'>
    readonly descricao: FieldRef<"Transacoes", 'String'>
    readonly valor: FieldRef<"Transacoes", 'Decimal'>
    readonly tipoId: FieldRef<"Transacoes", 'Int'>
    readonly categoriaId: FieldRef<"Transacoes", 'Int'>
    readonly bancoid: FieldRef<"Transacoes", 'Int'>
    readonly createdAt: FieldRef<"Transacoes", 'DateTime'>
    readonly updatedAt: FieldRef<"Transacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transacoes findUnique
   */
  export type TransacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter, which Transacoes to fetch.
     */
    where: TransacoesWhereUniqueInput
  }

  /**
   * Transacoes findUniqueOrThrow
   */
  export type TransacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter, which Transacoes to fetch.
     */
    where: TransacoesWhereUniqueInput
  }

  /**
   * Transacoes findFirst
   */
  export type TransacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter, which Transacoes to fetch.
     */
    where?: TransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacoes to fetch.
     */
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacoes.
     */
    cursor?: TransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacoes.
     */
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * Transacoes findFirstOrThrow
   */
  export type TransacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter, which Transacoes to fetch.
     */
    where?: TransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacoes to fetch.
     */
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacoes.
     */
    cursor?: TransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacoes.
     */
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * Transacoes findMany
   */
  export type TransacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter, which Transacoes to fetch.
     */
    where?: TransacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacoes to fetch.
     */
    orderBy?: TransacoesOrderByWithRelationInput | TransacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacoes.
     */
    cursor?: TransacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacoes.
     */
    skip?: number
    distinct?: TransacoesScalarFieldEnum | TransacoesScalarFieldEnum[]
  }

  /**
   * Transacoes create
   */
  export type TransacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacoes.
     */
    data: XOR<TransacoesCreateInput, TransacoesUncheckedCreateInput>
  }

  /**
   * Transacoes createMany
   */
  export type TransacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacoes.
     */
    data: TransacoesCreateManyInput | TransacoesCreateManyInput[]
  }

  /**
   * Transacoes createManyAndReturn
   */
  export type TransacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * The data used to create many Transacoes.
     */
    data: TransacoesCreateManyInput | TransacoesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacoes update
   */
  export type TransacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacoes.
     */
    data: XOR<TransacoesUpdateInput, TransacoesUncheckedUpdateInput>
    /**
     * Choose, which Transacoes to update.
     */
    where: TransacoesWhereUniqueInput
  }

  /**
   * Transacoes updateMany
   */
  export type TransacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacoes.
     */
    data: XOR<TransacoesUpdateManyMutationInput, TransacoesUncheckedUpdateManyInput>
    /**
     * Filter which Transacoes to update
     */
    where?: TransacoesWhereInput
    /**
     * Limit how many Transacoes to update.
     */
    limit?: number
  }

  /**
   * Transacoes updateManyAndReturn
   */
  export type TransacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * The data used to update Transacoes.
     */
    data: XOR<TransacoesUpdateManyMutationInput, TransacoesUncheckedUpdateManyInput>
    /**
     * Filter which Transacoes to update
     */
    where?: TransacoesWhereInput
    /**
     * Limit how many Transacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacoes upsert
   */
  export type TransacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacoes to update in case it exists.
     */
    where: TransacoesWhereUniqueInput
    /**
     * In case the Transacoes found by the `where` argument doesn't exist, create a new Transacoes with this data.
     */
    create: XOR<TransacoesCreateInput, TransacoesUncheckedCreateInput>
    /**
     * In case the Transacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacoesUpdateInput, TransacoesUncheckedUpdateInput>
  }

  /**
   * Transacoes delete
   */
  export type TransacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
    /**
     * Filter which Transacoes to delete.
     */
    where: TransacoesWhereUniqueInput
  }

  /**
   * Transacoes deleteMany
   */
  export type TransacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacoes to delete
     */
    where?: TransacoesWhereInput
    /**
     * Limit how many Transacoes to delete.
     */
    limit?: number
  }

  /**
   * Transacoes without action
   */
  export type TransacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacoes
     */
    select?: TransacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacoes
     */
    omit?: TransacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacoesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const BancoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    logoBase64: 'logoBase64',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BancoScalarFieldEnum = (typeof BancoScalarFieldEnum)[keyof typeof BancoScalarFieldEnum]


  export const UsuarioBancoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    bancoId: 'bancoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioBancoScalarFieldEnum = (typeof UsuarioBancoScalarFieldEnum)[keyof typeof UsuarioBancoScalarFieldEnum]


  export const TipoTransacoesScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoTransacoesScalarFieldEnum = (typeof TipoTransacoesScalarFieldEnum)[keyof typeof TipoTransacoesScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const TransacoesScalarFieldEnum: {
    id: 'id',
    data: 'data',
    descricao: 'descricao',
    valor: 'valor',
    tipoId: 'tipoId',
    categoriaId: 'categoriaId',
    bancoid: 'bancoid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransacoesScalarFieldEnum = (typeof TransacoesScalarFieldEnum)[keyof typeof TransacoesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    UsuarioBanco?: UsuarioBancoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UsuarioBanco?: UsuarioBancoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    UsuarioBanco?: UsuarioBancoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type BancoWhereInput = {
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    id?: IntFilter<"Banco"> | number
    nome?: StringFilter<"Banco"> | string
    logoBase64?: StringFilter<"Banco"> | string
    createdAt?: DateTimeFilter<"Banco"> | Date | string
    updatedAt?: DateTimeFilter<"Banco"> | Date | string
    UsuarioBanco?: UsuarioBancoListRelationFilter
    Transacoes?: TransacoesListRelationFilter
  }

  export type BancoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    logoBase64?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UsuarioBanco?: UsuarioBancoOrderByRelationAggregateInput
    Transacoes?: TransacoesOrderByRelationAggregateInput
  }

  export type BancoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    nome?: StringFilter<"Banco"> | string
    logoBase64?: StringFilter<"Banco"> | string
    createdAt?: DateTimeFilter<"Banco"> | Date | string
    updatedAt?: DateTimeFilter<"Banco"> | Date | string
    UsuarioBanco?: UsuarioBancoListRelationFilter
    Transacoes?: TransacoesListRelationFilter
  }, "id">

  export type BancoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    logoBase64?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BancoCountOrderByAggregateInput
    _avg?: BancoAvgOrderByAggregateInput
    _max?: BancoMaxOrderByAggregateInput
    _min?: BancoMinOrderByAggregateInput
    _sum?: BancoSumOrderByAggregateInput
  }

  export type BancoScalarWhereWithAggregatesInput = {
    AND?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    OR?: BancoScalarWhereWithAggregatesInput[]
    NOT?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banco"> | number
    nome?: StringWithAggregatesFilter<"Banco"> | string
    logoBase64?: StringWithAggregatesFilter<"Banco"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banco"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banco"> | Date | string
  }

  export type UsuarioBancoWhereInput = {
    AND?: UsuarioBancoWhereInput | UsuarioBancoWhereInput[]
    OR?: UsuarioBancoWhereInput[]
    NOT?: UsuarioBancoWhereInput | UsuarioBancoWhereInput[]
    id?: IntFilter<"UsuarioBanco"> | number
    usuarioId?: IntFilter<"UsuarioBanco"> | number
    bancoId?: IntFilter<"UsuarioBanco"> | number
    createdAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
    updatedAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }

  export type UsuarioBancoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    banco?: BancoOrderByWithRelationInput
  }

  export type UsuarioBancoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioBancoWhereInput | UsuarioBancoWhereInput[]
    OR?: UsuarioBancoWhereInput[]
    NOT?: UsuarioBancoWhereInput | UsuarioBancoWhereInput[]
    usuarioId?: IntFilter<"UsuarioBanco"> | number
    bancoId?: IntFilter<"UsuarioBanco"> | number
    createdAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
    updatedAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }, "id">

  export type UsuarioBancoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioBancoCountOrderByAggregateInput
    _avg?: UsuarioBancoAvgOrderByAggregateInput
    _max?: UsuarioBancoMaxOrderByAggregateInput
    _min?: UsuarioBancoMinOrderByAggregateInput
    _sum?: UsuarioBancoSumOrderByAggregateInput
  }

  export type UsuarioBancoScalarWhereWithAggregatesInput = {
    AND?: UsuarioBancoScalarWhereWithAggregatesInput | UsuarioBancoScalarWhereWithAggregatesInput[]
    OR?: UsuarioBancoScalarWhereWithAggregatesInput[]
    NOT?: UsuarioBancoScalarWhereWithAggregatesInput | UsuarioBancoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioBanco"> | number
    usuarioId?: IntWithAggregatesFilter<"UsuarioBanco"> | number
    bancoId?: IntWithAggregatesFilter<"UsuarioBanco"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsuarioBanco"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsuarioBanco"> | Date | string
  }

  export type TipoTransacoesWhereInput = {
    AND?: TipoTransacoesWhereInput | TipoTransacoesWhereInput[]
    OR?: TipoTransacoesWhereInput[]
    NOT?: TipoTransacoesWhereInput | TipoTransacoesWhereInput[]
    id?: IntFilter<"TipoTransacoes"> | number
    descricao?: StringFilter<"TipoTransacoes"> | string
    createdAt?: DateTimeFilter<"TipoTransacoes"> | Date | string
    updatedAt?: DateTimeFilter<"TipoTransacoes"> | Date | string
    Transacoes?: TransacoesListRelationFilter
  }

  export type TipoTransacoesOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Transacoes?: TransacoesOrderByRelationAggregateInput
  }

  export type TipoTransacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoTransacoesWhereInput | TipoTransacoesWhereInput[]
    OR?: TipoTransacoesWhereInput[]
    NOT?: TipoTransacoesWhereInput | TipoTransacoesWhereInput[]
    descricao?: StringFilter<"TipoTransacoes"> | string
    createdAt?: DateTimeFilter<"TipoTransacoes"> | Date | string
    updatedAt?: DateTimeFilter<"TipoTransacoes"> | Date | string
    Transacoes?: TransacoesListRelationFilter
  }, "id">

  export type TipoTransacoesOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoTransacoesCountOrderByAggregateInput
    _avg?: TipoTransacoesAvgOrderByAggregateInput
    _max?: TipoTransacoesMaxOrderByAggregateInput
    _min?: TipoTransacoesMinOrderByAggregateInput
    _sum?: TipoTransacoesSumOrderByAggregateInput
  }

  export type TipoTransacoesScalarWhereWithAggregatesInput = {
    AND?: TipoTransacoesScalarWhereWithAggregatesInput | TipoTransacoesScalarWhereWithAggregatesInput[]
    OR?: TipoTransacoesScalarWhereWithAggregatesInput[]
    NOT?: TipoTransacoesScalarWhereWithAggregatesInput | TipoTransacoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoTransacoes"> | number
    descricao?: StringWithAggregatesFilter<"TipoTransacoes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TipoTransacoes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoTransacoes"> | Date | string
  }

  export type CategoriasWhereInput = {
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    id?: IntFilter<"Categorias"> | number
    nome?: StringFilter<"Categorias"> | string
    createdAt?: DateTimeFilter<"Categorias"> | Date | string
    updatedAt?: DateTimeFilter<"Categorias"> | Date | string
    Transacoes?: TransacoesListRelationFilter
  }

  export type CategoriasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Transacoes?: TransacoesOrderByRelationAggregateInput
  }

  export type CategoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    nome?: StringFilter<"Categorias"> | string
    createdAt?: DateTimeFilter<"Categorias"> | Date | string
    updatedAt?: DateTimeFilter<"Categorias"> | Date | string
    Transacoes?: TransacoesListRelationFilter
  }, "id">

  export type CategoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriasCountOrderByAggregateInput
    _avg?: CategoriasAvgOrderByAggregateInput
    _max?: CategoriasMaxOrderByAggregateInput
    _min?: CategoriasMinOrderByAggregateInput
    _sum?: CategoriasSumOrderByAggregateInput
  }

  export type CategoriasScalarWhereWithAggregatesInput = {
    AND?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    OR?: CategoriasScalarWhereWithAggregatesInput[]
    NOT?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorias"> | number
    nome?: StringWithAggregatesFilter<"Categorias"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categorias"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categorias"> | Date | string
  }

  export type TransacoesWhereInput = {
    AND?: TransacoesWhereInput | TransacoesWhereInput[]
    OR?: TransacoesWhereInput[]
    NOT?: TransacoesWhereInput | TransacoesWhereInput[]
    id?: IntFilter<"Transacoes"> | number
    data?: DateTimeFilter<"Transacoes"> | Date | string
    descricao?: StringFilter<"Transacoes"> | string
    valor?: DecimalFilter<"Transacoes"> | Decimal | DecimalJsLike | number | string
    tipoId?: IntFilter<"Transacoes"> | number
    categoriaId?: IntFilter<"Transacoes"> | number
    bancoid?: IntFilter<"Transacoes"> | number
    createdAt?: DateTimeFilter<"Transacoes"> | Date | string
    updatedAt?: DateTimeFilter<"Transacoes"> | Date | string
    tipo?: XOR<TipoTransacoesScalarRelationFilter, TipoTransacoesWhereInput>
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    bancos?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }

  export type TransacoesOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipo?: TipoTransacoesOrderByWithRelationInput
    categoria?: CategoriasOrderByWithRelationInput
    bancos?: BancoOrderByWithRelationInput
  }

  export type TransacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacoesWhereInput | TransacoesWhereInput[]
    OR?: TransacoesWhereInput[]
    NOT?: TransacoesWhereInput | TransacoesWhereInput[]
    data?: DateTimeFilter<"Transacoes"> | Date | string
    descricao?: StringFilter<"Transacoes"> | string
    valor?: DecimalFilter<"Transacoes"> | Decimal | DecimalJsLike | number | string
    tipoId?: IntFilter<"Transacoes"> | number
    categoriaId?: IntFilter<"Transacoes"> | number
    bancoid?: IntFilter<"Transacoes"> | number
    createdAt?: DateTimeFilter<"Transacoes"> | Date | string
    updatedAt?: DateTimeFilter<"Transacoes"> | Date | string
    tipo?: XOR<TipoTransacoesScalarRelationFilter, TipoTransacoesWhereInput>
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    bancos?: XOR<BancoScalarRelationFilter, BancoWhereInput>
  }, "id">

  export type TransacoesOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransacoesCountOrderByAggregateInput
    _avg?: TransacoesAvgOrderByAggregateInput
    _max?: TransacoesMaxOrderByAggregateInput
    _min?: TransacoesMinOrderByAggregateInput
    _sum?: TransacoesSumOrderByAggregateInput
  }

  export type TransacoesScalarWhereWithAggregatesInput = {
    AND?: TransacoesScalarWhereWithAggregatesInput | TransacoesScalarWhereWithAggregatesInput[]
    OR?: TransacoesScalarWhereWithAggregatesInput[]
    NOT?: TransacoesScalarWhereWithAggregatesInput | TransacoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacoes"> | number
    data?: DateTimeWithAggregatesFilter<"Transacoes"> | Date | string
    descricao?: StringWithAggregatesFilter<"Transacoes"> | string
    valor?: DecimalWithAggregatesFilter<"Transacoes"> | Decimal | DecimalJsLike | number | string
    tipoId?: IntWithAggregatesFilter<"Transacoes"> | number
    categoriaId?: IntWithAggregatesFilter<"Transacoes"> | number
    bancoid?: IntWithAggregatesFilter<"Transacoes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transacoes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transacoes"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoCreateInput = {
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoCreateNestedManyWithoutBancoInput
    Transacoes?: TransacoesCreateNestedManyWithoutBancosInput
  }

  export type BancoUncheckedCreateInput = {
    id?: number
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoUncheckedCreateNestedManyWithoutBancoInput
    Transacoes?: TransacoesUncheckedCreateNestedManyWithoutBancosInput
  }

  export type BancoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUpdateManyWithoutBancoNestedInput
    Transacoes?: TransacoesUpdateManyWithoutBancosNestedInput
  }

  export type BancoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUncheckedUpdateManyWithoutBancoNestedInput
    Transacoes?: TransacoesUncheckedUpdateManyWithoutBancosNestedInput
  }

  export type BancoCreateManyInput = {
    id?: number
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BancoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutUsuarioBancoInput
    banco: BancoCreateNestedOneWithoutUsuarioBancoInput
  }

  export type UsuarioBancoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    bancoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioBancoNestedInput
    banco?: BancoUpdateOneRequiredWithoutUsuarioBancoNestedInput
  }

  export type UsuarioBancoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoCreateManyInput = {
    id?: number
    usuarioId: number
    bancoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoTransacoesCreateInput = {
    id: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesCreateNestedManyWithoutTipoInput
  }

  export type TipoTransacoesUncheckedCreateInput = {
    id: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoTransacoesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUpdateManyWithoutTipoNestedInput
  }

  export type TipoTransacoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoTransacoesCreateManyInput = {
    id: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoTransacoesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoTransacoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriasCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesCreateInput = {
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoTransacoesCreateNestedOneWithoutTransacoesInput
    categoria: CategoriasCreateNestedOneWithoutTransacoesInput
    bancos: BancoCreateNestedOneWithoutTransacoesInput
  }

  export type TransacoesUncheckedCreateInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    categoriaId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoTransacoesUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutTransacoesNestedInput
    bancos?: BancoUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesCreateManyInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    categoriaId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioBancoListRelationFilter = {
    every?: UsuarioBancoWhereInput
    some?: UsuarioBancoWhereInput
    none?: UsuarioBancoWhereInput
  }

  export type UsuarioBancoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TransacoesListRelationFilter = {
    every?: TransacoesWhereInput
    some?: TransacoesWhereInput
    none?: TransacoesWhereInput
  }

  export type TransacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BancoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logoBase64?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BancoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BancoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logoBase64?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BancoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logoBase64?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BancoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type BancoScalarRelationFilter = {
    is?: BancoWhereInput
    isNot?: BancoWhereInput
  }

  export type UsuarioBancoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioBancoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
  }

  export type UsuarioBancoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioBancoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioBancoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    bancoId?: SortOrder
  }

  export type TipoTransacoesCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoTransacoesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoTransacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoTransacoesMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoTransacoesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TipoTransacoesScalarRelationFilter = {
    is?: TipoTransacoesWhereInput
    isNot?: TipoTransacoesWhereInput
  }

  export type CategoriasScalarRelationFilter = {
    is?: CategoriasWhereInput
    isNot?: CategoriasWhereInput
  }

  export type TransacoesCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacoesAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
  }

  export type TransacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacoesMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransacoesSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tipoId?: SortOrder
    categoriaId?: SortOrder
    bancoid?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioBancoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput> | UsuarioBancoCreateWithoutUsuarioInput[] | UsuarioBancoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutUsuarioInput | UsuarioBancoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioBancoCreateManyUsuarioInputEnvelope
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
  }

  export type UsuarioBancoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput> | UsuarioBancoCreateWithoutUsuarioInput[] | UsuarioBancoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutUsuarioInput | UsuarioBancoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioBancoCreateManyUsuarioInputEnvelope
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioBancoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput> | UsuarioBancoCreateWithoutUsuarioInput[] | UsuarioBancoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutUsuarioInput | UsuarioBancoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioBancoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioBancoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioBancoCreateManyUsuarioInputEnvelope
    set?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    disconnect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    delete?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    update?: UsuarioBancoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioBancoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioBancoUpdateManyWithWhereWithoutUsuarioInput | UsuarioBancoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioBancoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput> | UsuarioBancoCreateWithoutUsuarioInput[] | UsuarioBancoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutUsuarioInput | UsuarioBancoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioBancoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioBancoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioBancoCreateManyUsuarioInputEnvelope
    set?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    disconnect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    delete?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    update?: UsuarioBancoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioBancoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioBancoUpdateManyWithWhereWithoutUsuarioInput | UsuarioBancoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
  }

  export type UsuarioBancoCreateNestedManyWithoutBancoInput = {
    create?: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput> | UsuarioBancoCreateWithoutBancoInput[] | UsuarioBancoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutBancoInput | UsuarioBancoCreateOrConnectWithoutBancoInput[]
    createMany?: UsuarioBancoCreateManyBancoInputEnvelope
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
  }

  export type TransacoesCreateNestedManyWithoutBancosInput = {
    create?: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput> | TransacoesCreateWithoutBancosInput[] | TransacoesUncheckedCreateWithoutBancosInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutBancosInput | TransacoesCreateOrConnectWithoutBancosInput[]
    createMany?: TransacoesCreateManyBancosInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type UsuarioBancoUncheckedCreateNestedManyWithoutBancoInput = {
    create?: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput> | UsuarioBancoCreateWithoutBancoInput[] | UsuarioBancoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutBancoInput | UsuarioBancoCreateOrConnectWithoutBancoInput[]
    createMany?: UsuarioBancoCreateManyBancoInputEnvelope
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
  }

  export type TransacoesUncheckedCreateNestedManyWithoutBancosInput = {
    create?: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput> | TransacoesCreateWithoutBancosInput[] | TransacoesUncheckedCreateWithoutBancosInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutBancosInput | TransacoesCreateOrConnectWithoutBancosInput[]
    createMany?: TransacoesCreateManyBancosInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type UsuarioBancoUpdateManyWithoutBancoNestedInput = {
    create?: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput> | UsuarioBancoCreateWithoutBancoInput[] | UsuarioBancoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutBancoInput | UsuarioBancoCreateOrConnectWithoutBancoInput[]
    upsert?: UsuarioBancoUpsertWithWhereUniqueWithoutBancoInput | UsuarioBancoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: UsuarioBancoCreateManyBancoInputEnvelope
    set?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    disconnect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    delete?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    update?: UsuarioBancoUpdateWithWhereUniqueWithoutBancoInput | UsuarioBancoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: UsuarioBancoUpdateManyWithWhereWithoutBancoInput | UsuarioBancoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
  }

  export type TransacoesUpdateManyWithoutBancosNestedInput = {
    create?: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput> | TransacoesCreateWithoutBancosInput[] | TransacoesUncheckedCreateWithoutBancosInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutBancosInput | TransacoesCreateOrConnectWithoutBancosInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutBancosInput | TransacoesUpsertWithWhereUniqueWithoutBancosInput[]
    createMany?: TransacoesCreateManyBancosInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutBancosInput | TransacoesUpdateWithWhereUniqueWithoutBancosInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutBancosInput | TransacoesUpdateManyWithWhereWithoutBancosInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type UsuarioBancoUncheckedUpdateManyWithoutBancoNestedInput = {
    create?: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput> | UsuarioBancoCreateWithoutBancoInput[] | UsuarioBancoUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: UsuarioBancoCreateOrConnectWithoutBancoInput | UsuarioBancoCreateOrConnectWithoutBancoInput[]
    upsert?: UsuarioBancoUpsertWithWhereUniqueWithoutBancoInput | UsuarioBancoUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: UsuarioBancoCreateManyBancoInputEnvelope
    set?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    disconnect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    delete?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    connect?: UsuarioBancoWhereUniqueInput | UsuarioBancoWhereUniqueInput[]
    update?: UsuarioBancoUpdateWithWhereUniqueWithoutBancoInput | UsuarioBancoUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: UsuarioBancoUpdateManyWithWhereWithoutBancoInput | UsuarioBancoUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
  }

  export type TransacoesUncheckedUpdateManyWithoutBancosNestedInput = {
    create?: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput> | TransacoesCreateWithoutBancosInput[] | TransacoesUncheckedCreateWithoutBancosInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutBancosInput | TransacoesCreateOrConnectWithoutBancosInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutBancosInput | TransacoesUpsertWithWhereUniqueWithoutBancosInput[]
    createMany?: TransacoesCreateManyBancosInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutBancosInput | TransacoesUpdateWithWhereUniqueWithoutBancosInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutBancosInput | TransacoesUpdateManyWithWhereWithoutBancosInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutUsuarioBancoInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioBancoInput, UsuarioUncheckedCreateWithoutUsuarioBancoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioBancoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BancoCreateNestedOneWithoutUsuarioBancoInput = {
    create?: XOR<BancoCreateWithoutUsuarioBancoInput, BancoUncheckedCreateWithoutUsuarioBancoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutUsuarioBancoInput
    connect?: BancoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutUsuarioBancoNestedInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioBancoInput, UsuarioUncheckedCreateWithoutUsuarioBancoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioBancoInput
    upsert?: UsuarioUpsertWithoutUsuarioBancoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutUsuarioBancoInput, UsuarioUpdateWithoutUsuarioBancoInput>, UsuarioUncheckedUpdateWithoutUsuarioBancoInput>
  }

  export type BancoUpdateOneRequiredWithoutUsuarioBancoNestedInput = {
    create?: XOR<BancoCreateWithoutUsuarioBancoInput, BancoUncheckedCreateWithoutUsuarioBancoInput>
    connectOrCreate?: BancoCreateOrConnectWithoutUsuarioBancoInput
    upsert?: BancoUpsertWithoutUsuarioBancoInput
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutUsuarioBancoInput, BancoUpdateWithoutUsuarioBancoInput>, BancoUncheckedUpdateWithoutUsuarioBancoInput>
  }

  export type TransacoesCreateNestedManyWithoutTipoInput = {
    create?: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput> | TransacoesCreateWithoutTipoInput[] | TransacoesUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutTipoInput | TransacoesCreateOrConnectWithoutTipoInput[]
    createMany?: TransacoesCreateManyTipoInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type TransacoesUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput> | TransacoesCreateWithoutTipoInput[] | TransacoesUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutTipoInput | TransacoesCreateOrConnectWithoutTipoInput[]
    createMany?: TransacoesCreateManyTipoInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type TransacoesUpdateManyWithoutTipoNestedInput = {
    create?: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput> | TransacoesCreateWithoutTipoInput[] | TransacoesUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutTipoInput | TransacoesCreateOrConnectWithoutTipoInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutTipoInput | TransacoesUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: TransacoesCreateManyTipoInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutTipoInput | TransacoesUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutTipoInput | TransacoesUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type TransacoesUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput> | TransacoesCreateWithoutTipoInput[] | TransacoesUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutTipoInput | TransacoesCreateOrConnectWithoutTipoInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutTipoInput | TransacoesUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: TransacoesCreateManyTipoInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutTipoInput | TransacoesUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutTipoInput | TransacoesUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type TransacoesCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput> | TransacoesCreateWithoutCategoriaInput[] | TransacoesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutCategoriaInput | TransacoesCreateOrConnectWithoutCategoriaInput[]
    createMany?: TransacoesCreateManyCategoriaInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type TransacoesUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput> | TransacoesCreateWithoutCategoriaInput[] | TransacoesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutCategoriaInput | TransacoesCreateOrConnectWithoutCategoriaInput[]
    createMany?: TransacoesCreateManyCategoriaInputEnvelope
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
  }

  export type TransacoesUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput> | TransacoesCreateWithoutCategoriaInput[] | TransacoesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutCategoriaInput | TransacoesCreateOrConnectWithoutCategoriaInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutCategoriaInput | TransacoesUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TransacoesCreateManyCategoriaInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutCategoriaInput | TransacoesUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutCategoriaInput | TransacoesUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type TransacoesUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput> | TransacoesCreateWithoutCategoriaInput[] | TransacoesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TransacoesCreateOrConnectWithoutCategoriaInput | TransacoesCreateOrConnectWithoutCategoriaInput[]
    upsert?: TransacoesUpsertWithWhereUniqueWithoutCategoriaInput | TransacoesUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TransacoesCreateManyCategoriaInputEnvelope
    set?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    disconnect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    delete?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    connect?: TransacoesWhereUniqueInput | TransacoesWhereUniqueInput[]
    update?: TransacoesUpdateWithWhereUniqueWithoutCategoriaInput | TransacoesUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TransacoesUpdateManyWithWhereWithoutCategoriaInput | TransacoesUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
  }

  export type TipoTransacoesCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<TipoTransacoesCreateWithoutTransacoesInput, TipoTransacoesUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: TipoTransacoesCreateOrConnectWithoutTransacoesInput
    connect?: TipoTransacoesWhereUniqueInput
  }

  export type CategoriasCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<CategoriasCreateWithoutTransacoesInput, CategoriasUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutTransacoesInput
    connect?: CategoriasWhereUniqueInput
  }

  export type BancoCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<BancoCreateWithoutTransacoesInput, BancoUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: BancoCreateOrConnectWithoutTransacoesInput
    connect?: BancoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TipoTransacoesUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<TipoTransacoesCreateWithoutTransacoesInput, TipoTransacoesUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: TipoTransacoesCreateOrConnectWithoutTransacoesInput
    upsert?: TipoTransacoesUpsertWithoutTransacoesInput
    connect?: TipoTransacoesWhereUniqueInput
    update?: XOR<XOR<TipoTransacoesUpdateToOneWithWhereWithoutTransacoesInput, TipoTransacoesUpdateWithoutTransacoesInput>, TipoTransacoesUncheckedUpdateWithoutTransacoesInput>
  }

  export type CategoriasUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<CategoriasCreateWithoutTransacoesInput, CategoriasUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutTransacoesInput
    upsert?: CategoriasUpsertWithoutTransacoesInput
    connect?: CategoriasWhereUniqueInput
    update?: XOR<XOR<CategoriasUpdateToOneWithWhereWithoutTransacoesInput, CategoriasUpdateWithoutTransacoesInput>, CategoriasUncheckedUpdateWithoutTransacoesInput>
  }

  export type BancoUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<BancoCreateWithoutTransacoesInput, BancoUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: BancoCreateOrConnectWithoutTransacoesInput
    upsert?: BancoUpsertWithoutTransacoesInput
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutTransacoesInput, BancoUpdateWithoutTransacoesInput>, BancoUncheckedUpdateWithoutTransacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioBancoCreateWithoutUsuarioInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    banco: BancoCreateNestedOneWithoutUsuarioBancoInput
  }

  export type UsuarioBancoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    bancoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioBancoWhereUniqueInput
    create: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioBancoCreateManyUsuarioInputEnvelope = {
    data: UsuarioBancoCreateManyUsuarioInput | UsuarioBancoCreateManyUsuarioInput[]
  }

  export type UsuarioBancoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioBancoWhereUniqueInput
    update: XOR<UsuarioBancoUpdateWithoutUsuarioInput, UsuarioBancoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioBancoCreateWithoutUsuarioInput, UsuarioBancoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioBancoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioBancoWhereUniqueInput
    data: XOR<UsuarioBancoUpdateWithoutUsuarioInput, UsuarioBancoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioBancoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioBancoScalarWhereInput
    data: XOR<UsuarioBancoUpdateManyMutationInput, UsuarioBancoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioBancoScalarWhereInput = {
    AND?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
    OR?: UsuarioBancoScalarWhereInput[]
    NOT?: UsuarioBancoScalarWhereInput | UsuarioBancoScalarWhereInput[]
    id?: IntFilter<"UsuarioBanco"> | number
    usuarioId?: IntFilter<"UsuarioBanco"> | number
    bancoId?: IntFilter<"UsuarioBanco"> | number
    createdAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
    updatedAt?: DateTimeFilter<"UsuarioBanco"> | Date | string
  }

  export type UsuarioBancoCreateWithoutBancoInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutUsuarioBancoInput
  }

  export type UsuarioBancoUncheckedCreateWithoutBancoInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoCreateOrConnectWithoutBancoInput = {
    where: UsuarioBancoWhereUniqueInput
    create: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput>
  }

  export type UsuarioBancoCreateManyBancoInputEnvelope = {
    data: UsuarioBancoCreateManyBancoInput | UsuarioBancoCreateManyBancoInput[]
  }

  export type TransacoesCreateWithoutBancosInput = {
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoTransacoesCreateNestedOneWithoutTransacoesInput
    categoria: CategoriasCreateNestedOneWithoutTransacoesInput
  }

  export type TransacoesUncheckedCreateWithoutBancosInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesCreateOrConnectWithoutBancosInput = {
    where: TransacoesWhereUniqueInput
    create: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput>
  }

  export type TransacoesCreateManyBancosInputEnvelope = {
    data: TransacoesCreateManyBancosInput | TransacoesCreateManyBancosInput[]
  }

  export type UsuarioBancoUpsertWithWhereUniqueWithoutBancoInput = {
    where: UsuarioBancoWhereUniqueInput
    update: XOR<UsuarioBancoUpdateWithoutBancoInput, UsuarioBancoUncheckedUpdateWithoutBancoInput>
    create: XOR<UsuarioBancoCreateWithoutBancoInput, UsuarioBancoUncheckedCreateWithoutBancoInput>
  }

  export type UsuarioBancoUpdateWithWhereUniqueWithoutBancoInput = {
    where: UsuarioBancoWhereUniqueInput
    data: XOR<UsuarioBancoUpdateWithoutBancoInput, UsuarioBancoUncheckedUpdateWithoutBancoInput>
  }

  export type UsuarioBancoUpdateManyWithWhereWithoutBancoInput = {
    where: UsuarioBancoScalarWhereInput
    data: XOR<UsuarioBancoUpdateManyMutationInput, UsuarioBancoUncheckedUpdateManyWithoutBancoInput>
  }

  export type TransacoesUpsertWithWhereUniqueWithoutBancosInput = {
    where: TransacoesWhereUniqueInput
    update: XOR<TransacoesUpdateWithoutBancosInput, TransacoesUncheckedUpdateWithoutBancosInput>
    create: XOR<TransacoesCreateWithoutBancosInput, TransacoesUncheckedCreateWithoutBancosInput>
  }

  export type TransacoesUpdateWithWhereUniqueWithoutBancosInput = {
    where: TransacoesWhereUniqueInput
    data: XOR<TransacoesUpdateWithoutBancosInput, TransacoesUncheckedUpdateWithoutBancosInput>
  }

  export type TransacoesUpdateManyWithWhereWithoutBancosInput = {
    where: TransacoesScalarWhereInput
    data: XOR<TransacoesUpdateManyMutationInput, TransacoesUncheckedUpdateManyWithoutBancosInput>
  }

  export type TransacoesScalarWhereInput = {
    AND?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
    OR?: TransacoesScalarWhereInput[]
    NOT?: TransacoesScalarWhereInput | TransacoesScalarWhereInput[]
    id?: IntFilter<"Transacoes"> | number
    data?: DateTimeFilter<"Transacoes"> | Date | string
    descricao?: StringFilter<"Transacoes"> | string
    valor?: DecimalFilter<"Transacoes"> | Decimal | DecimalJsLike | number | string
    tipoId?: IntFilter<"Transacoes"> | number
    categoriaId?: IntFilter<"Transacoes"> | number
    bancoid?: IntFilter<"Transacoes"> | number
    createdAt?: DateTimeFilter<"Transacoes"> | Date | string
    updatedAt?: DateTimeFilter<"Transacoes"> | Date | string
  }

  export type UsuarioCreateWithoutUsuarioBancoInput = {
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutUsuarioBancoInput = {
    id?: number
    nome: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutUsuarioBancoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUsuarioBancoInput, UsuarioUncheckedCreateWithoutUsuarioBancoInput>
  }

  export type BancoCreateWithoutUsuarioBancoInput = {
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesCreateNestedManyWithoutBancosInput
  }

  export type BancoUncheckedCreateWithoutUsuarioBancoInput = {
    id?: number
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Transacoes?: TransacoesUncheckedCreateNestedManyWithoutBancosInput
  }

  export type BancoCreateOrConnectWithoutUsuarioBancoInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutUsuarioBancoInput, BancoUncheckedCreateWithoutUsuarioBancoInput>
  }

  export type UsuarioUpsertWithoutUsuarioBancoInput = {
    update: XOR<UsuarioUpdateWithoutUsuarioBancoInput, UsuarioUncheckedUpdateWithoutUsuarioBancoInput>
    create: XOR<UsuarioCreateWithoutUsuarioBancoInput, UsuarioUncheckedCreateWithoutUsuarioBancoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutUsuarioBancoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutUsuarioBancoInput, UsuarioUncheckedUpdateWithoutUsuarioBancoInput>
  }

  export type UsuarioUpdateWithoutUsuarioBancoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutUsuarioBancoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoUpsertWithoutUsuarioBancoInput = {
    update: XOR<BancoUpdateWithoutUsuarioBancoInput, BancoUncheckedUpdateWithoutUsuarioBancoInput>
    create: XOR<BancoCreateWithoutUsuarioBancoInput, BancoUncheckedCreateWithoutUsuarioBancoInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutUsuarioBancoInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutUsuarioBancoInput, BancoUncheckedUpdateWithoutUsuarioBancoInput>
  }

  export type BancoUpdateWithoutUsuarioBancoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUpdateManyWithoutBancosNestedInput
  }

  export type BancoUncheckedUpdateWithoutUsuarioBancoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transacoes?: TransacoesUncheckedUpdateManyWithoutBancosNestedInput
  }

  export type TransacoesCreateWithoutTipoInput = {
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriasCreateNestedOneWithoutTransacoesInput
    bancos: BancoCreateNestedOneWithoutTransacoesInput
  }

  export type TransacoesUncheckedCreateWithoutTipoInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    categoriaId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesCreateOrConnectWithoutTipoInput = {
    where: TransacoesWhereUniqueInput
    create: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput>
  }

  export type TransacoesCreateManyTipoInputEnvelope = {
    data: TransacoesCreateManyTipoInput | TransacoesCreateManyTipoInput[]
  }

  export type TransacoesUpsertWithWhereUniqueWithoutTipoInput = {
    where: TransacoesWhereUniqueInput
    update: XOR<TransacoesUpdateWithoutTipoInput, TransacoesUncheckedUpdateWithoutTipoInput>
    create: XOR<TransacoesCreateWithoutTipoInput, TransacoesUncheckedCreateWithoutTipoInput>
  }

  export type TransacoesUpdateWithWhereUniqueWithoutTipoInput = {
    where: TransacoesWhereUniqueInput
    data: XOR<TransacoesUpdateWithoutTipoInput, TransacoesUncheckedUpdateWithoutTipoInput>
  }

  export type TransacoesUpdateManyWithWhereWithoutTipoInput = {
    where: TransacoesScalarWhereInput
    data: XOR<TransacoesUpdateManyMutationInput, TransacoesUncheckedUpdateManyWithoutTipoInput>
  }

  export type TransacoesCreateWithoutCategoriaInput = {
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoTransacoesCreateNestedOneWithoutTransacoesInput
    bancos: BancoCreateNestedOneWithoutTransacoesInput
  }

  export type TransacoesUncheckedCreateWithoutCategoriaInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesCreateOrConnectWithoutCategoriaInput = {
    where: TransacoesWhereUniqueInput
    create: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput>
  }

  export type TransacoesCreateManyCategoriaInputEnvelope = {
    data: TransacoesCreateManyCategoriaInput | TransacoesCreateManyCategoriaInput[]
  }

  export type TransacoesUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: TransacoesWhereUniqueInput
    update: XOR<TransacoesUpdateWithoutCategoriaInput, TransacoesUncheckedUpdateWithoutCategoriaInput>
    create: XOR<TransacoesCreateWithoutCategoriaInput, TransacoesUncheckedCreateWithoutCategoriaInput>
  }

  export type TransacoesUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: TransacoesWhereUniqueInput
    data: XOR<TransacoesUpdateWithoutCategoriaInput, TransacoesUncheckedUpdateWithoutCategoriaInput>
  }

  export type TransacoesUpdateManyWithWhereWithoutCategoriaInput = {
    where: TransacoesScalarWhereInput
    data: XOR<TransacoesUpdateManyMutationInput, TransacoesUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type TipoTransacoesCreateWithoutTransacoesInput = {
    id: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoTransacoesUncheckedCreateWithoutTransacoesInput = {
    id: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoTransacoesCreateOrConnectWithoutTransacoesInput = {
    where: TipoTransacoesWhereUniqueInput
    create: XOR<TipoTransacoesCreateWithoutTransacoesInput, TipoTransacoesUncheckedCreateWithoutTransacoesInput>
  }

  export type CategoriasCreateWithoutTransacoesInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriasUncheckedCreateWithoutTransacoesInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriasCreateOrConnectWithoutTransacoesInput = {
    where: CategoriasWhereUniqueInput
    create: XOR<CategoriasCreateWithoutTransacoesInput, CategoriasUncheckedCreateWithoutTransacoesInput>
  }

  export type BancoCreateWithoutTransacoesInput = {
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateWithoutTransacoesInput = {
    id?: number
    nome: string
    logoBase64: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UsuarioBanco?: UsuarioBancoUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoCreateOrConnectWithoutTransacoesInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutTransacoesInput, BancoUncheckedCreateWithoutTransacoesInput>
  }

  export type TipoTransacoesUpsertWithoutTransacoesInput = {
    update: XOR<TipoTransacoesUpdateWithoutTransacoesInput, TipoTransacoesUncheckedUpdateWithoutTransacoesInput>
    create: XOR<TipoTransacoesCreateWithoutTransacoesInput, TipoTransacoesUncheckedCreateWithoutTransacoesInput>
    where?: TipoTransacoesWhereInput
  }

  export type TipoTransacoesUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: TipoTransacoesWhereInput
    data: XOR<TipoTransacoesUpdateWithoutTransacoesInput, TipoTransacoesUncheckedUpdateWithoutTransacoesInput>
  }

  export type TipoTransacoesUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoTransacoesUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriasUpsertWithoutTransacoesInput = {
    update: XOR<CategoriasUpdateWithoutTransacoesInput, CategoriasUncheckedUpdateWithoutTransacoesInput>
    create: XOR<CategoriasCreateWithoutTransacoesInput, CategoriasUncheckedCreateWithoutTransacoesInput>
    where?: CategoriasWhereInput
  }

  export type CategoriasUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: CategoriasWhereInput
    data: XOR<CategoriasUpdateWithoutTransacoesInput, CategoriasUncheckedUpdateWithoutTransacoesInput>
  }

  export type CategoriasUpdateWithoutTransacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriasUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoUpsertWithoutTransacoesInput = {
    update: XOR<BancoUpdateWithoutTransacoesInput, BancoUncheckedUpdateWithoutTransacoesInput>
    create: XOR<BancoCreateWithoutTransacoesInput, BancoUncheckedCreateWithoutTransacoesInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutTransacoesInput, BancoUncheckedUpdateWithoutTransacoesInput>
  }

  export type BancoUpdateWithoutTransacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logoBase64?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsuarioBanco?: UsuarioBancoUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type UsuarioBancoCreateManyUsuarioInput = {
    id?: number
    bancoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoUpdateWithoutUsuarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    banco?: BancoUpdateOneRequiredWithoutUsuarioBancoNestedInput
  }

  export type UsuarioBancoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoCreateManyBancoInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesCreateManyBancosInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioBancoUpdateWithoutBancoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioBancoNestedInput
  }

  export type UsuarioBancoUncheckedUpdateWithoutBancoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioBancoUncheckedUpdateManyWithoutBancoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesUpdateWithoutBancosInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoTransacoesUpdateOneRequiredWithoutTransacoesNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacoesUncheckedUpdateWithoutBancosInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesUncheckedUpdateManyWithoutBancosInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesCreateManyTipoInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    categoriaId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesUpdateWithoutTipoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriasUpdateOneRequiredWithoutTransacoesNestedInput
    bancos?: BancoUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacoesUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesCreateManyCategoriaInput = {
    id?: number
    data: Date | string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    tipoId: number
    bancoid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransacoesUpdateWithoutCategoriaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoTransacoesUpdateOneRequiredWithoutTransacoesNestedInput
    bancos?: BancoUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacoesUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacoesUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipoId?: IntFieldUpdateOperationsInput | number
    bancoid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}