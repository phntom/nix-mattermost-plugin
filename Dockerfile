FROM golang:1.14.13-buster AS builder

# install nodejs 14 lts
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# install golangci-lint
RUN curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.34.1

WORKDIR /app

COPY go.mod* .
RUN go mod download
RUN mkdir build
COPY build/go.mod* build/
RUN cd build && go mod download

COPY . .

#ENV CGO_ENABLED=0
# not specifying CGO_ENABLED will allow to both cross compile (with 0) and run tests (with 1)
ENV GOARCH="amd64"
ENV GOHOSTARCH="amd64"
ENV GOHOSTOS="linux"
ENV GOOS="linux"
# Build

ENV GL_DEBUG=linters_output
ENV GOPACKAGESPRINTGOLISTERRORS=1

# if checked out in windows - gofmt will complain about CRLF line endings with -s
# this is a quick fix
RUN gofmt -l -s -w .

RUN make

# port forward with:
# kubectl port-forward -n chat svc/mattermost-integ 8065:8065 &
# deploy with
# docker run -e MM_ADMIN_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxx -e MM_SERVICESETTINGS_SITEURL=http://host.docker.internal:8065 tagname make deploy
