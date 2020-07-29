FROM hayd/alpine-deno:1.1.1 AS development
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno -q cache --unstable deps.ts
COPY . .
RUN deno -q install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts
ENV PATH="/home/deno/.deno/bin:$PATH"
ENTRYPOINT ["denon"]
