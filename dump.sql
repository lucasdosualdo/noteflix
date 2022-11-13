--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    category character varying(20) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: grades; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.grades (
    id integer NOT NULL,
    grade integer NOT NULL,
    "movieId" integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: grades_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.grades_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: grades_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.grades_id_seq OWNED BY public.grades.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    movie character varying(40) NOT NULL,
    "categoryId" integer NOT NULL,
    "streamId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: moviesUsers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."moviesUsers" (
    id integer NOT NULL,
    "movieId" integer NOT NULL,
    "userId" integer NOT NULL,
    seen boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: moviesUsers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."moviesUsers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: moviesUsers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."moviesUsers_id_seq" OWNED BY public."moviesUsers".id;


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notes (
    id integer NOT NULL,
    note text NOT NULL,
    "movieId" integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;


--
-- Name: streams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.streams (
    id integer NOT NULL,
    stream character varying(20) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: streams_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.streams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: streams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.streams_id_seq OWNED BY public.streams.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "userName" character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: grades id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades ALTER COLUMN id SET DEFAULT nextval('public.grades_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: moviesUsers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviesUsers" ALTER COLUMN id SET DEFAULT nextval('public."moviesUsers_id_seq"'::regclass);


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);


--
-- Name: streams id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.streams ALTER COLUMN id SET DEFAULT nextval('public.streams_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'documentário', '2022-11-11 12:04:52.394749');
INSERT INTO public.categories VALUES (2, 'ação', '2022-11-11 12:04:58.271805');
INSERT INTO public.categories VALUES (3, 'romance', '2022-11-11 12:05:06.405566');
INSERT INTO public.categories VALUES (4, 'comédia', '2022-11-11 12:05:13.479234');
INSERT INTO public.categories VALUES (5, 'aventura', '2022-11-11 12:05:19.995072');
INSERT INTO public.categories VALUES (6, 'animação', '2022-11-11 12:05:28.404088');
INSERT INTO public.categories VALUES (7, 'terror', '2022-11-11 12:05:35.390275');
INSERT INTO public.categories VALUES (8, 'suspense', '2022-11-11 12:05:41.5719');
INSERT INTO public.categories VALUES (9, 'drama', '2022-11-11 12:06:14.957964');
INSERT INTO public.categories VALUES (12, 'sci-fi', '2022-11-11 12:06:58.792898');
INSERT INTO public.categories VALUES (13, 'anime', '2022-11-11 12:11:16.4755');


--
-- Data for Name: grades; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'velozes e furiosos', 2, 1, '2022-11-11 12:10:28.874942');
INSERT INTO public.movies VALUES (2, 'velozes e furiosos 2', 2, 2, '2022-11-11 12:10:37.907449');
INSERT INTO public.movies VALUES (3, 'toy story', 6, 1, '2022-11-11 12:10:59.136466');
INSERT INTO public.movies VALUES (4, 'narutin', 13, 6, '2022-11-11 12:11:40.459093');
INSERT INTO public.movies VALUES (5, 'sharknado', 5, 5, '2022-11-11 12:12:13.938302');
INSERT INTO public.movies VALUES (8, 'sharknado222222', 2, 4, '2022-11-12 19:19:45.94569');


--
-- Data for Name: moviesUsers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."moviesUsers" VALUES (2, 1, 1, false, '2022-11-11 12:15:49.982245');
INSERT INTO public."moviesUsers" VALUES (8, 5, 1, false, '2022-11-11 17:46:57.080749');
INSERT INTO public."moviesUsers" VALUES (9, 2, 1, false, '2022-11-11 17:59:06.33994');
INSERT INTO public."moviesUsers" VALUES (12, 4, 1, false, '2022-11-13 03:27:18.936372');
INSERT INTO public."moviesUsers" VALUES (13, 3, 1, false, '2022-11-13 03:28:18.717694');


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: streams; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.streams VALUES (1, 'netflix', '2022-11-11 12:08:23.271668');
INSERT INTO public.streams VALUES (2, 'primevideo', '2022-11-11 12:08:28.946715');
INSERT INTO public.streams VALUES (3, 'hbomax', '2022-11-11 12:08:34.614805');
INSERT INTO public.streams VALUES (4, 'disneyplus', '2022-11-11 12:08:44.783509');
INSERT INTO public.streams VALUES (5, 'starplus', '2022-11-11 12:09:14.748074');
INSERT INTO public.streams VALUES (6, 'crunchyroll', '2022-11-11 12:09:37.949468');
INSERT INTO public.streams VALUES (7, 'none', '2022-11-11 12:09:44.372681');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'lucas', 'lucasdosualdo@gmail.com', '123', '2022-11-11 12:04:45.227153');
INSERT INTO public.users VALUES (2, 'lucas2', 'lucasdosualdo2@gmail.com', '1234', '2022-11-12 22:03:29.919036');
INSERT INTO public.users VALUES (5, 'lucas3', 'lucasdosualdo3@gmail.com', '1234', '2022-11-12 22:04:44.373262');
INSERT INTO public.users VALUES (6, 'lucas33', 'lucasdosualdo33@gmail.com', '1234', '2022-11-12 22:05:55.659867');
INSERT INTO public.users VALUES (9, 'lucas333', 'lucasdosualdo333@gmail.com', '1234', '2022-11-12 22:07:35.328933');
INSERT INTO public.users VALUES (10, 'lukitas', 'lucasdosualdo3323@gmail.com', '12345', '2022-11-13 02:12:43.32469');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 13, true);


--
-- Name: grades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.grades_id_seq', 1, false);


--
-- Name: moviesUsers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."moviesUsers_id_seq"', 13, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 8, true);


--
-- Name: notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.notes_id_seq', 1, false);


--
-- Name: streams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.streams_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: grades grades_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades
    ADD CONSTRAINT grades_pkey PRIMARY KEY (id);


--
-- Name: moviesUsers moviesUsers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviesUsers"
    ADD CONSTRAINT "moviesUsers_pkey" PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: notes notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);


--
-- Name: streams streams_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.streams
    ADD CONSTRAINT streams_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: grades grades_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades
    ADD CONSTRAINT "grades_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id);


--
-- Name: grades grades_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grades
    ADD CONSTRAINT "grades_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: moviesUsers moviesUsers_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviesUsers"
    ADD CONSTRAINT "moviesUsers_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id);


--
-- Name: moviesUsers moviesUsers_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviesUsers"
    ADD CONSTRAINT "moviesUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: movies movies_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: movies movies_streamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES public.streams(id);


--
-- Name: notes notes_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT "notes_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id);


--
-- Name: notes notes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT "notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

