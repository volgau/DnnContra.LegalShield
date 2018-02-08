#!/bin/sh

PACKAGE_NAME="DnnContra.LegalShield"
DEPLOY_PATH="$HOME/mnt/dnn8"
SKINS_DEPLOY_PATH="$DEPLOY_PATH/Portals/_default/Skins/$PACKAGE_NAME"
CONTAINERS_DEPLOY_PATH="$DEPLOY_PATH/Portals/_default/Containers/$PACKAGE_NAME"

rsync --exclude ".git" --exclude "tmp" -rv "./" "$SKINS_DEPLOY_PATH"
rsync -rv "./containers/" "$CONTAINERS_DEPLOY_PATH"